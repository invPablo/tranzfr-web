"use client";

import React, { useState, useMemo } from "react";
import { Plus, Trash2, ArrowRight, DollarSign, Users, Landmark } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Expense {
  id: string;
  description: string;
  amount: number;
  paidBy: string;
}

export default function SplitterWidget() {
  const { language, t } = useLanguage();

  // Initial demo state
  const [members, setMembers] = useState<string[]>(["Ana", "Carlos", "Sofía", "Lucas"]);
  const [newMember, setNewMember] = useState("");
  
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: "1", description: language === "es" ? "Alquiler 4x4" : "4x4 Rental", amount: 200, paidBy: "Carlos" },
    { id: "2", description: language === "es" ? "Cena de bienvenida" : "Welcome dinner", amount: 120, paidBy: "Ana" },
    { id: "3", description: language === "es" ? "Gasolina" : "Gasoline", amount: 80, paidBy: "Sofía" },
  ]);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("Ana");

  // Error messaging states
  const [memberError, setMemberError] = useState("");
  const [expenseError, setExpenseError] = useState("");

  // Handle adding a new member
  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = newMember.trim();
    if (!cleanName) return;
    if (members.some((m) => m.toLowerCase() === cleanName.toLowerCase())) {
      setMemberError(language === "es" ? "Este nombre ya existe" : "This name already exists");
      return;
    }
    setMembers([...members, cleanName]);
    setNewMember("");
    setMemberError("");
    // Default payer to new member if it was empty
    if (members.length === 0) {
      setPaidBy(cleanName);
    }
  };

  // Handle removing a member
  const handleRemoveMember = (name: string) => {
    if (members.length <= 2) {
      setMemberError(language === "es" ? "Se necesitan al menos 2 viajeros para dividir gastos." : "At least 2 travelers are required to split expenses.");
      return;
    }
    setMembers(members.filter((m) => m !== name));
    setExpenses(expenses.filter((e) => e.paidBy !== name));
    if (paidBy === name) {
      setPaidBy(members.find((m) => m !== name) || "");
    }
    setMemberError("");
  };

  // Handle adding a new expense
  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanDesc = description.trim();
    const valAmount = parseFloat(amount);

    if (!cleanDesc) {
      setExpenseError(language === "es" ? "Introduce un concepto (ej. Almuerzo)" : "Enter a concept (e.g. Lunch)");
      return;
    }
    if (isNaN(valAmount) || valAmount <= 0) {
      setExpenseError(language === "es" ? "Introduce un importe válido mayor que 0" : "Enter a valid amount greater than 0");
      return;
    }
    if (!paidBy) {
      setExpenseError(language === "es" ? "Selecciona quién pagó el gasto" : "Select who paid the expense");
      return;
    }

    const newExpense: Expense = {
      id: Date.now().toString(),
      description: cleanDesc,
      amount: valAmount,
      paidBy,
    };

    setExpenses([newExpense, ...expenses]);
    setDescription("");
    setAmount("");
    setExpenseError("");
  };

  // Handle deleting an expense
  const handleDeleteExpense = (id: string) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  // Calculations: Total, balances, and debt simplification
  const totals = useMemo(() => {
    const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
    const perPerson = members.length > 0 ? totalSpent / members.length : 0;

    // Calculate initial balances: Paid - Owed
    const balances: Record<string, number> = {};
    members.forEach((m) => {
      balances[m] = 0;
    });

    expenses.forEach((e) => {
      // Payer gets credit for the total amount
      if (balances[e.paidBy] !== undefined) {
        balances[e.paidBy] += e.amount;
      }
      
      // Everyone splits the expense equally
      const share = e.amount / members.length;
      members.forEach((m) => {
        if (balances[m] !== undefined) {
          balances[m] -= share;
        }
      });
    });

    // Simplify debts using a greedy settlement approach
    const debtDetails: { from: string; to: string; amount: number }[] = [];
    
    // Create list of participants and their balances
    const participants = Object.keys(balances).map((name) => ({
      name,
      balance: balances[name],
    }));

    // Separate debtors (< 0) and creditors (> 0)
    let debtors = participants.filter((p) => p.balance < -0.01).sort((a, b) => a.balance - b.balance);
    let creditors = participants.filter((p) => p.balance > 0.01).sort((a, b) => b.balance - a.balance);

    let maxIterations = 100; // safety breakout
    while (debtors.length > 0 && creditors.length > 0 && maxIterations > 0) {
      maxIterations--;
      const debtor = debtors[0];
      const creditor = creditors[0];

      const amountToSettle = Math.min(Math.abs(debtor.balance), creditor.balance);

      debtDetails.push({
        from: debtor.name,
        to: creditor.name,
        amount: parseFloat(amountToSettle.toFixed(2)),
      });

      debtor.balance += amountToSettle;
      creditor.balance -= amountToSettle;

      // Filter out participants whose balances are resolved
      debtors = debtors.filter((d) => d.balance < -0.01).sort((a, b) => a.balance - b.balance);
      creditors = creditors.filter((c) => c.balance > 0.01).sort((a, b) => b.balance - a.balance);
    }

    return {
      totalSpent,
      perPerson,
      balances,
      settlements: debtDetails,
    };
  }, [members, expenses, language]);

  return (
    <section id="splitter" className="py-24 relative bg-white overflow-hidden border-t border-gray-100">
      {/* Background soft color spots */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] rounded-full bg-sky-50 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-50 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {t("simulator.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-555">
            {t("simulator.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Management Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Travelers Configuration */}
            <div className="bg-white border border-gray-150 shadow-sm shadow-gray-200/20 rounded-3xl p-6 relative overflow-hidden">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users size={18} className="text-[#208AEF]" />
                <span>1. {t("simulator.travelers")}</span>
              </h3>

              <form onSubmit={handleAddMember} className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder={t("simulator.placeholderName")}
                  value={newMember}
                  onChange={(e) => setNewMember(e.target.value)}
                  className="flex-1 bg-white border border-gray-250 rounded-xl px-4 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#208AEF] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#208AEF] hover:bg-[#1c7cd6] text-white rounded-xl px-4 py-2 font-semibold text-sm flex items-center gap-1.5 transition-all shadow-md shadow-sky-500/10 active:scale-95 cursor-pointer"
                >
                  <Plus size={16} />
                  <span>{language === "es" ? "Añadir" : "Add"}</span>
                </button>
              </form>

              {memberError && (
                <p className="text-xs text-[#D8473F] font-medium mb-3">{memberError}</p>
              )}

              {/* Members Badges List */}
              <div className="flex flex-wrap gap-2">
                {members.map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-150 text-sm text-gray-700 font-semibold group"
                  >
                    <span>{name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveMember(name)}
                      className="text-gray-400 hover:text-[#D8473F] transition-colors cursor-pointer"
                      title={`Eliminar a ${name}`}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Expenses Input Form */}
            <div className="bg-white border border-gray-150 shadow-sm shadow-gray-200/20 rounded-3xl p-6 relative overflow-hidden">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <DollarSign size={18} className="text-[#00966F]" />
                <span>2. {t("simulator.addExpense")}</span>
              </h3>

              <form onSubmit={handleAddExpense} className="flex flex-col gap-4">
                {/* Description */}
                <div>
                  <label className="block text-xs font-semibold text-gray-450 uppercase tracking-wider mb-1.5">
                    {language === "es" ? "Concepto" : "Concept"}
                  </label>
                  <input
                    type="text"
                    placeholder={t("simulator.placeholderConcept")}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-white border border-gray-250 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#208AEF] transition-colors"
                  />
                </div>

                {/* Amount and Payer Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-450 uppercase tracking-wider mb-1.5">
                      {t("simulator.amount")}
                    </label>
                    <input
                      type="number"
                      placeholder="0.00"
                      step="any"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-white border border-gray-250 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#208AEF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-455 uppercase tracking-wider mb-1.5">
                      {t("simulator.paidBy")}
                    </label>
                    <select
                      value={paidBy}
                      onChange={(e) => setPaidBy(e.target.value)}
                      className="w-full bg-white border border-gray-250 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#208AEF] transition-colors cursor-pointer"
                    >
                      {members.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {expenseError && (
                  <p className="text-xs text-[#D8473F] font-medium">{expenseError}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#208AEF] hover:bg-[#1c7cd6] text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-sky-500/10 active:scale-[0.99] cursor-pointer text-sm"
                >
                  {t("simulator.addExpense")}
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: Live Output Screen */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-150 rounded-3xl p-6 lg:p-8 flex flex-col h-full min-h-[580px] justify-between relative overflow-hidden shadow-md shadow-gray-200/30">
              
              {/* Decorative graphic blob */}
              <div className="absolute right-[-40px] top-[-40px] w-48 h-48 rounded-full bg-sky-50 blur-3xl pointer-events-none" />

              <div>
                {/* Header Summary */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                      {language === "es" ? "Estado de cuentas" : "Account Status"}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-0.5">
                      {language === "es" ? "Resumen de Cuentas" : "Expense Summary"}
                    </h3>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-left">
                      <p className="text-xs text-gray-450">{language === "es" ? "Total gastado" : "Total spent"}</p>
                      <p className="text-lg font-extrabold text-gray-900">{totals.totalSpent.toFixed(2)} €</p>
                    </div>
                    <div className="w-[1px] bg-gray-200" />
                    <div className="text-left">
                      <p className="text-xs text-gray-450">{language === "es" ? "Por persona" : "Per person"}</p>
                      <p className="text-lg font-extrabold text-[#208AEF]">{totals.perPerson.toFixed(2)} €</p>
                    </div>
                  </div>
                </div>

                {/* Expenses Log section */}
                <div className="py-6">
                  <h4 className="text-xs font-bold text-gray-450 uppercase tracking-wider mb-3">
                    {language === "es" ? "Historial de gastos" : "Expense history"}
                  </h4>
                  
                  {expenses.length === 0 ? (
                    <div className="py-6 text-center text-sm text-gray-400 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                      {t("simulator.noExpenses")}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2.5 max-h-[160px] overflow-y-auto pr-1">
                      {expenses.map((exp) => (
                        <div
                          key={exp.id}
                          className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 border border-gray-100 hover:border-gray-200 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#208AEF] text-sm">
                              ✈️
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-800 leading-tight">{exp.description}</p>
                              <p className="text-[10px] text-gray-450">
                                {language === "es" ? `Pagado por ${exp.paidBy}` : `Paid by ${exp.paidBy}`}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-gray-900">{exp.amount.toFixed(2)} €</span>
                            <button
                              onClick={() => handleDeleteExpense(exp.id)}
                              className="text-gray-400 hover:text-[#D8473F] p-1 rounded transition-colors cursor-pointer"
                              title={language === "es" ? "Eliminar gasto" : "Delete expense"}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Balances detail */}
                <div className="pb-6">
                  <h4 className="text-xs font-bold text-gray-455 uppercase tracking-wider mb-3">
                    {t("simulator.balancesTitle")}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {members.map((name) => {
                      const val = totals.balances[name] || 0;
                      const isOwed = val >= 0.01;
                      const isNeutral = Math.abs(val) <= 0.01;
                      return (
                        <div
                          key={name}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            isNeutral
                              ? "bg-gray-50 border-gray-100"
                              : isOwed
                              ? "bg-[#E1F3EC] border-[#00966F]/15"
                              : "bg-[#FBEAE8] border-[#D8473F]/15"
                          }`}
                        >
                          <p className="text-xs font-bold text-gray-800 truncate">{name}</p>
                          <p
                            className={`text-sm font-extrabold mt-1 ${
                              isNeutral
                                ? "text-gray-400"
                                : isOwed
                                ? "text-[#00966F]"
                                : "text-[#D8473F]"
                            }`}
                          >
                            {isNeutral 
                              ? (language === "es" ? "Saldado" : "Settled") 
                              : `${val > 0 ? "+" : ""}${val.toFixed(2)} €`}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Debt Simplification Results Area */}
              <div className="mt-4 p-5 rounded-2xl bg-[#E6F4FE] border border-sky-100 relative overflow-hidden">
                <div className="absolute left-[-20px] bottom-[-20px] w-24 h-24 rounded-full bg-sky-100/50 blur-xl pointer-events-none" />
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Landmark size={16} className="text-[#208AEF]" />
                    <h4 className="text-xs font-bold text-[#208AEF] uppercase tracking-wider">
                      {t("simulator.calculations")}
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold bg-[#208AEF]/10 border border-[#208AEF]/25 px-2 py-0.5 rounded text-[#208AEF]">
                    {language === "es" ? "Algoritmo Tranzfr" : "Tranzfr Engine"}
                  </span>
                </div>

                {totals.settlements.length === 0 ? (
                  <div className="text-center py-4 text-sm text-[#208AEF]/80 font-medium">
                    {t("simulator.noSettlements")}
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    {totals.settlements.map((settle, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-100 shadow-3xs"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-[#D8473F]">{settle.from}</span>
                          <ArrowRight size={14} className="text-[#208AEF]" />
                          <span className="text-sm font-bold text-[#00966F]">{settle.to}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-[9px] font-medium text-gray-400">
                            {language === "es" ? "debe pagar" : "owes"}
                          </p>
                          <p className="text-sm font-extrabold text-gray-900">{settle.amount.toFixed(2)} €</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
