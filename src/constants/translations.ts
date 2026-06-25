export const translations = {
  es: {
    beta: {
      message: "Estamos en fase beta",
      cta: "Descargar la beta →",
    },
    nav: {
      features: "Características",
      simulator: "Simulador",
      trips: "Viajes",
      faq: "Preguntas",
      download: "Descargar",
    },
    hero: {
      tagline: "Nuevo: Simplificación Automática en un clic",
      title: "Viaja más. Preocúpate menos.",
      titleAccent: "Divide gastos al instante.",
      subtitle: "Tranzfr es la app móvil diseñada para acabar con las matemáticas incómodas de los viajes grupales. Registra gastos en cualquier moneda, salda deudas fácilmente y simplifica las transferencias con un algoritmo inteligente.",
      rating: "",
      reviews: "",
      compliance: "Solo disponible en Google Play para Android",
      comingSoon: "Próximamente en Google Play para Android",
      mockup: {
        title: "Roadtrip Islandia 🇮🇸",
        members: "4 miembros • EUR",
        owed: "Te deben 180,00 €",
        liquidar: "Liquidar",
        compartir: "Compartir",
        budget: "Presupuesto Grupal",
        budgetVal: "1.420 € / 2.000 €",
        saldos: "SALDOS",
        porLiquidar: "POR LIQUIDAR",
        actividad: "ACTIVIDAD",
        addExpense: "Añadir gasto",
        resolvedTitle: "Resuelto",
        resolvedText: "Sin deudas redundantes",
        multicurrency: "Multidivisa",
        multicurrencyVal: "USD, EUR, GBP...",
        history: {
          rent: "Alquiler 4x4 SUV",
          fuel: "Gasolinera N1",
          super: "Supermercado Krónan",
        }
      }
    },
    features: {
      title: "Diseñado para tus viajes grupales",
      subtitle: "Tranzfr gestiona toda la complejidad de las cuentas de tus viajes directamente desde tu móvil. Descubre sus principales ventajas.",
      items: {
        accounts: {
          title: "Acceso y Cuentas",
          desc: "Regístrate en segundos usando tu email o tu cuenta de Google. Restablece tu contraseña cómodamente y elige tu idioma (español o inglés) con un solo toque."
        },
        groups: {
          title: "Grupos de Viaje",
          desc: "Crea grupos asignando nombre, moneda y foto almacenada en la nube. Invita a miembros mediante email (con auto-vinculación al registrarse) o a través de enlaces directos."
        },
        expenses: {
          title: "Gastos Flexibles",
          desc: "Registra importes por categorías y repártelos en tres modalidades: a partes iguales, por porcentajes o por montos exactos, visualizando cuánto falta por asignar."
        },
        payments: {
          title: "Saldos y Balances",
          desc: "Registra pagos manuales de liquidación entre viajeros. Nuestro algoritmo calcula automáticamente el balance y determina quién debe pagar a quién reduciendo al mínimo las transferencias."
        },
        budgets: {
          title: "Presupuestos en Control",
          desc: "Establece presupuestos generales para el grupo y presupuestos personales por miembro. El indicador dinámico se vuelve rojo si te excedes de tu presupuesto."
        },
        connectivity: {
          title: "Avisos Claros sin Conexión",
          desc: "Si te quedas sin cobertura en la montaña o el desierto, Tranzfr te avisa al instante en vez de fallar en silencio, para que añadas el gasto en cuanto recuperes señal."
        }
      },
      visualizer: {
        flow: "Flujo de Deudas",
        without: "Sin Tranzfr",
        optimization: "Optimización",
        with: "Con Tranzfr",
        owes: "debe pagar a",
        liveConverter: "Conversor de Divisa",
        liveRates: "API de tipos de cambio",
        networkState: "Estado de Red",
        connected: "Conectado",
        offline: "Sin Conexión",
        btnOffline: "Simular Offline",
        btnOnline: "Conectar Red",
        preview: "Vista Previa: Viaje.pdf",
        export: "Exportación de Reportes",
        concept: "Concepto",
        payer: "Pagador",
        amount: "Monto",
        currency: "Divisa",
      }
    },
    simulator: {
      title: "Simulador de Gastos y Deudas",
      subtitle: "Prueba la lógica exacta de nuestra app móvil directamente aquí. Agrega participantes, añade gastos y comprueba cómo el algoritmo de simplificación reduce las transferencias al mínimo.",
      travelers: "Viajeros en el grupo",
      addTraveler: "Añadir viajero",
      placeholderName: "Ej. Juan",
      expenses: "Gastos registrados",
      addExpense: "Registrar Gasto",
      placeholderConcept: "Ej. Gasolina, Cena...",
      amount: "Importe (€)",
      paidBy: "Pagado por",
      splitEqually: "Repartir a partes iguales entre todos",
      calculations: "Cálculos de Liquidación Simplificados",
      noExpenses: "Aún no se han añadido gastos. ¡Registra alguno arriba para ver la magia!",
      noSettlements: "¡Todos los saldos están saldados!",
      owesTo: "debe pagar a",
      balancesTitle: "Balances del Grupo",
      inFavor: "A favor",
      inDebt: "Debe",
    },
    trips: {
      title: "Inspiración para tus Viajes",
      subtitle: "Tranzfr se adapta a cualquier tipo de aventura. Desde escapadas improvisadas de fin de semana hasta grandes expediciones transcontinentales.",
      tabs: {
        weekend: {
          name: "Escapada Fin de Semana",
          title: "París de Escapada",
          desc: "Perfecto para viajes cortos donde la rapidez es clave. Divide las cenas, el hotel y las entradas al museo al instante sin cortar el ritmo del viaje.",
          budget: "Presupuesto",
          spent: "Gastado",
          currency: "EUR"
        },
        friends: {
          name: "Viaje de Amigos",
          title: "Mochileros en Tailandia",
          desc: "Registra gastos en distintas divisas (Euros, Bahts, Dólares) sin volverte loco. Tranzfr te da una conversión de referencia al instante para que sepáis aproximadamente quién debe a quién.",
          budget: "Presupuesto",
          spent: "Gastado",
          currency: "THB"
        },
        adventure: {
          name: "Gran Aventura",
          title: "Roadtrip por Islandia",
          desc: "Si te quedas sin cobertura en los parajes más recónditos de la isla, Tranzfr te avisa al momento para que añadas el gasto en cuanto recuperes conexión.",
          budget: "Presupuesto",
          spent: "Gastado",
          currency: "ISK"
        }
      }
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "¿Tienes alguna duda sobre cómo funciona Tranzfr? Encuentra aquí las respuestas rápidas.",
      q1: "¿Tengo que pagar por crear grupos?",
      a1: "No, Tranzfr es completamente gratuita. Puedes crear y gestionar todos los grupos de viaje que quieras sin coste alguno.",
      q2: "¿Cómo funciona el algoritmo de simplificación de deudas?",
      a2: "Nuestra aplicación móvil utiliza un algoritmo optimizado ('greedy algorithm') que analiza todas las deudas cruzadas de los miembros y calcula el balance neto de cada uno. A partir de ahí, genera la menor cantidad de transacciones directas posibles para saldar el grupo.",
      q3: "¿Puedo añadir gastos si no tengo cobertura o conexión a internet?",
      a3: "Si te quedas sin conexión, Tranzfr te avisa de forma clara en el momento para que añadas el gasto en cuanto recuperes señal, en vez de fallar en silencio.",
      q4: "¿Cómo se invitan a otros miembros al grupo?",
      a4: "Puedes invitar a tus amigos introduciendo sus correos electrónicos para que se auto-vinculen en cuanto se registren en la app, o bien compartiendo un enlace directo de invitación que abrirá la aplicación móvil instantáneamente gracias al soporte de deep linking.",
      q5: "¿Solo está disponible para dispositivos Android?",
      a5: "Sí, Tranzfr está enfocado y optimizado de forma exclusiva para la plataforma Android y está disponible para descargar únicamente en Google Play.",
    },
    footer: {
      desc: "La aplicación móvil definitiva para compartir y simplificar gastos de viaje en grupos de amigos. Olvídate de los cálculos manuales y viaja tranquilo.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      rights: "Todos los derechos reservados.",
    }
  },
  en: {
    beta: {
      message: "We're in beta",
      cta: "Download the beta →",
    },
    nav: {
      features: "Features",
      simulator: "Simulator",
      trips: "Trips",
      faq: "FAQ",
      download: "Download",
    },
    hero: {
      tagline: "New: One-click Automatic Debt Simplification",
      title: "Travel more. Worry less.",
      titleAccent: "Split expenses instantly.",
      subtitle: "Tranzfr is the mobile app designed to put an end to awkward math on group trips. Log expenses in any currency, settle debts easily, and simplify transfers with a smart algorithm.",
      rating: "",
      reviews: "",
      compliance: "Exclusively available on Google Play for Android",
      comingSoon: "Coming soon on Google Play for Android",
      mockup: {
        title: "Roadtrip Iceland 🇮🇸",
        members: "4 members • EUR",
        owed: "You are owed €180.00",
        liquidar: "Settle",
        compartir: "Share",
        budget: "Group Budget",
        budgetVal: "1,420 € / 2,000 €",
        saldos: "BALANCES",
        porLiquidar: "TO SETTLE",
        actividad: "ACTIVITY",
        addExpense: "Add expense",
        resolvedTitle: "Resolved",
        resolvedText: "No redundant debts",
        multicurrency: "Multi-currency",
        multicurrencyVal: "USD, EUR, GBP...",
        history: {
          rent: "4x4 SUV Rental",
          fuel: "N1 Gas Station",
          super: "Krónan Supermarket",
        }
      }
    },
    features: {
      title: "Designed for your group travels",
      subtitle: "Tranzfr manages all the complexity of your trip expenses directly on your mobile device. Discover its main benefits.",
      items: {
        accounts: {
          title: "Access & Accounts",
          desc: "Sign up in seconds using your email or Google account. Settle passwords easily and choose your language (Spanish or English) with a single tap."
        },
        groups: {
          title: "Trip Groups",
          desc: "Create travel groups with a custom name, base currency, and cloud-stored photo. Invite members via email (auto-linked upon signup) or shareable direct links."
        },
        expenses: {
          title: "Flexible Expenses",
          desc: "Log expenses categorized and split them in three modes: equally, by percentages, or by exact shares per person, seeing the live balance indicator."
        },
        payments: {
          title: "Balances & Settlements",
          desc: "Register manual payments between travelers. Our algorithm automatically computes net balances and optimizes who pays whom with minimum transactions."
        },
        budgets: {
          title: "Budgets Under Control",
          desc: "Define group-level travel budgets and individual limits for each member. The dynamic progress bar turns red if you exceed your limit."
        },
        connectivity: {
          title: "Clear No-Connection Alerts",
          desc: "If you lose signal in the mountains or the desert, Tranzfr tells you right away instead of failing silently, so you can log the expense as soon as you're back online."
        }
      },
      visualizer: {
        flow: "Debt Flow",
        without: "Without Tranzfr",
        optimization: "Optimization",
        with: "With Tranzfr",
        owes: "owes to",
        liveConverter: "Currency Converter",
        liveRates: "Exchange rates API",
        networkState: "Network State",
        connected: "Connected",
        offline: "No Connection",
        btnOffline: "Simulate Offline",
        btnOnline: "Connect Network",
        preview: "Preview: Trip.pdf",
        export: "Export Reports",
        concept: "Concept",
        payer: "Payer",
        amount: "Amount",
        currency: "Currency",
      }
    },
    simulator: {
      title: "Expenses & Debt Simulator",
      subtitle: "Test the exact logic of our mobile app right here. Add members, input expenses, and see how our debt simplification algorithm reduces transactions to the minimum.",
      travelers: "Travelers in the group",
      addTraveler: "Add traveler",
      placeholderName: "e.g. John",
      expenses: "Logged expenses",
      addExpense: "Log Expense",
      placeholderConcept: "e.g. Gas, Dinner...",
      amount: "Amount (€)",
      paidBy: "Paid by",
      splitEqually: "Split equally among all members",
      calculations: "Simplified Settle Calculations",
      noExpenses: "No expenses logged yet. Add some above to see the magic!",
      noSettlements: "All balances are settled!",
      owesTo: "owes",
      balancesTitle: "Group Balances",
      inFavor: "Owed",
      inDebt: "Owes",
    },
    trips: {
      title: "Inspiration for Your Trips",
      subtitle: "Tranzfr adapts to any kind of adventure. From quick weekend getaways to massive transcontinental expeditions.",
      tabs: {
        weekend: {
          name: "Weekend Getaway",
          title: "Weekend in Paris",
          desc: "Perfect for short trips where speed is key. Split dinners, hotels, and museum entries instantly without interrupting the trip flow.",
          budget: "Budget",
          spent: "Spent",
          currency: "EUR"
        },
        friends: {
          name: "Trip with Friends",
          title: "Backpackers in Thailand",
          desc: "Log expenses in different currencies (Euros, Bahts, Dollars) without the headache. Tranzfr gives you an instant reference conversion so you roughly know who owes whom.",
          budget: "Budget",
          spent: "Spent",
          currency: "THB"
        },
        adventure: {
          name: "Grand Adventure",
          title: "Iceland Roadtrip",
          desc: "If you lose signal in the island's most remote areas, Tranzfr lets you know right away so you can log the expense once you're back online.",
          budget: "Budget",
          spent: "Spent",
          currency: "ISK"
        }
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Have questions about how Tranzfr works? Find quick answers here.",
      q1: "Do I have to pay to create groups?",
      a1: "No, Tranzfr is completely free. You can create and manage as many trip groups as you want at no cost.",
      q2: "How does the debt simplification algorithm work?",
      a2: "Our mobile app utilizes an optimized greedy algorithm that analyzes everyone's debts and computes their net balances. It then generates the minimum amount of direct transactions needed to settle the group.",
      q3: "Can I log expenses if I don't have internet connection?",
      a3: "If you lose connection, Tranzfr tells you right away so you can log the expense as soon as you're back online, instead of failing silently.",
      q4: "How do I invite other members to the group?",
      a4: "You can invite friends by entering their email address (so they auto-link upon registering), or by sharing a direct invitation link that opens the mobile app instantly using deep linking.",
      q5: "Is it only available for Android devices?",
      a5: "Yes, Tranzfr is exclusively optimized and built for the Android platform, and is available for download only on Google Play.",
    },
    footer: {
      desc: "The ultimate mobile app to share and simplify trip expenses in groups of friends. Forget manual calculations and travel with peace of mind.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved.",
    }
  }
};
