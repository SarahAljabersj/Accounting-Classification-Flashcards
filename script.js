document.addEventListener('DOMContentLoaded', function() {
    // Flashcard data based on the accounting classification tables
    const flashcardsData = [
        // A Section
        { id: 1, section: "A", term: "Accounts Payable", classification: "Current Liability", statement: "Balance Sheet", balance: "Credit" },
        { id: 2, section: "A", term: "Accounts Receivable", classification: "Current Asset", statement: "Balance Sheet", balance: "Debit" },
        { id: 3, section: "A", term: "Accumulated Depreciation—Buildings", classification: "Plant Asset—Contra", statement: "Balance Sheet", balance: "Credit" },
        { id: 4, section: "A", term: "Accumulated Depreciation—Equipment", classification: "Plant Asset—Contra", statement: "Balance Sheet", balance: "Credit" },
        { id: 5, section: "A", term: "Administrative Expenses", classification: "Operating Expense", statement: "Income Statement", balance: "Debit" },
        { id: 6, section: "A", term: "Allowance for Doubtful Accounts", classification: "Current Asset—Contra", statement: "Balance Sheet", balance: "Credit" },
        { id: 7, section: "A", term: "Amortization Expense", classification: "Operating Expense", statement: "Income Statement", balance: "Debit" },
        
        // B Section
        { id: 8, section: "B", term: "Bad Debt Expense", classification: "Operating Expense", statement: "Income Statement", balance: "Debit" },
        { id: 9, section: "B", term: "Bonds Payable", classification: "Long-Term Liability", statement: "Balance Sheet", balance: "Credit" },
        { id: 10, section: "B", term: "Buildings", classification: "Plant Asset", statement: "Balance Sheet", balance: "Debit" },
        
        // C Section
        { id: 11, section: "C", term: "Cash", classification: "Current Asset", statement: "Balance Sheet", balance: "Debit" },
        { id: 12, section: "C", term: "Common Stock", classification: "Stockholders' Equity", statement: "Balance Sheet", balance: "Credit" },
        { id: 13, section: "C", term: "Copyrights", classification: "Intangible Asset", statement: "Balance Sheet", balance: "Debit" },
        { id: 14, section: "C", term: "Cost of Goods Sold", classification: "Cost of Goods Sold", statement: "Income Statement", balance: "Debit" },
        
        // D Section
        { id: 15, section: "D", term: "Debt Investments", classification: "Current Asset/Long-Term Investment", statement: "Balance Sheet", balance: "Debit" },
        { id: 16, section: "D", term: "Depreciation Expense", classification: "Operating Expense", statement: "Income Statement", balance: "Debit" },
        { id: 17, section: "D", term: "Discount on Bonds Payable", classification: "Long-Term Liability—Contra", statement: "Balance Sheet", balance: "Debit" },
        { id: 18, section: "D", term: "Dividend Revenue", classification: "Other Income", statement: "Income Statement", balance: "Credit" },
        { id: 19, section: "D", term: "Dividends", classification: "Temporary account closed to Retained Earnings", statement: "Retained Earnings Statement", balance: "Debit" },
        { id: 20, section: "D", term: "Dividends Payable", classification: "Current Liability", statement: "Balance Sheet", balance: "Credit" },
        
        // E Section
        { id: 21, section: "E", term: "Equipment", classification: "Plant Asset", statement: "Balance Sheet", balance: "Debit" },
        
        // F Section
        { id: 22, section: "F", term: "Freight-Out", classification: "Operating Expense", statement: "Income Statement", balance: "Debit" },
        
        // G Section
        { id: 23, section: "G", term: "Gain on Disposal of Plant Assets", classification: "Other Income", statement: "Income Statement", balance: "Credit" },
        { id: 24, section: "G", term: "Goodwill", classification: "Intangible Asset", statement: "Balance Sheet", balance: "Debit" },
        
        // I Section
        { id: 25, section: "I", term: "Income Summary", classification: "Temporary account closed to Retained Earnings", statement: "Not Applicable", balance: "Varies" },
        { id: 26, section: "I", term: "Income Tax Expense", classification: "Income Tax Expense", statement: "Income Statement", balance: "Debit" },
        { id: 27, section: "I", term: "Income Taxes Payable", classification: "Current Liability", statement: "Balance Sheet", balance: "Credit" },
        { id: 28, section: "I", term: "Insurance Expense", classification: "Operating Expense", statement: "Income Statement", balance: "Debit" },
        { id: 29, section: "I", term: "Interest Expense", classification: "Other Expense", statement: "Income Statement", balance: "Debit" },
        { id: 30, section: "I", term: "Interest Payable", classification: "Current Liability", statement: "Balance Sheet", balance: "Credit" },
        { id: 31, section: "I", term: "Interest Receivable", classification: "Current Asset", statement: "Balance Sheet", balance: "Debit" },
        { id: 32, section: "I", term: "Interest Revenue", classification: "Other Income", statement: "Income Statement", balance: "Credit" },
        { id: 33, section: "I", term: "Inventory", classification: "Current Asset", statement: "Balance Sheet", balance: "Debit" },
        
        // L Section
        { id: 34, section: "L", term: "Land", classification: "Plant Asset", statement: "Balance Sheet", balance: "Debit" },
        { id: 35, section: "L", term: "Loss on Disposal of Plant Assets", classification: "Other Expense", statement: "Income Statement", balance: "Debit" },
        
        // M Section
        { id: 36, section: "M", term: "Maintenance and Repairs Expense", classification: "Operating Expense", statement: "Income Statement", balance: "Debit" },
        { id: 37, section: "M", term: "Mortgage Payable", classification: "Long-Term Liability", statement: "Balance Sheet", balance: "Credit" },
        
        // N Section
        { id: 38, section: "N", term: "Notes Payable", classification: "Current Liability/Long-Term Liability", statement: "Balance Sheet", balance: "Credit" },
        
        // P Section
        { id: 39, section: "P", term: "Patents", classification: "Intangible Asset", statement: "Balance Sheet", balance: "Debit" },
        { id: 40, section: "P", term: "Paid-in Capital in Excess of Par Value—Common Stock", classification: "Stockholders' Equity", statement: "Balance Sheet", balance: "Credit" },
        { id: 41, section: "P", term: "Paid-in Capital in Excess of Par Value—Preferred Stock", classification: "Stockholders' Equity", statement: "Balance Sheet", balance: "Credit" },
        { id: 42, section: "P", term: "Preferred Stock", classification: "Stockholders' Equity", statement: "Balance Sheet", balance: "Credit" },
        { id: 43, section: "P", term: "Premium on Bonds Payable", classification: "Long-Term Liability—Contra", statement: "Balance Sheet", balance: "Credit" },
        { id: 44, section: "P", term: "Prepaid Insurance", classification: "Current Asset", statement: "Balance Sheet", balance: "Debit" },
        { id: 45, section: "P", term: "Prepaid Rent", classification: "Current Asset", statement: "Balance Sheet", balance: "Debit" },
        
        // R Section
        { id: 46, section: "R", term: "Rent Expense", classification: "Operating Expense", statement: "Income Statement", balance: "Debit" },
        { id: 47, section: "R", term: "Retained Earnings", classification: "Stockholders' Equity", statement: "Balance Sheet and Retained Earnings Statement", balance: "Credit" },
        
        // S Section
        { id: 48, section: "S", term: "Salaries and Wages Expense", classification: "Operating Expense", statement: "Income Statement", balance: "Debit" },
        { id: 49, section: "S", term: "Salaries and Wages Payable", classification: "Current Liability", statement: "Balance Sheet", balance: "Credit" },
        { id: 50, section: "S", term: "Sales Discounts", classification: "Revenue—Contra", statement: "Income Statement", balance: "Debit" },
        { id: 51, section: "S", term: "Sales Returns and Allowances", classification: "Revenue—Contra", statement: "Income Statement", balance: "Debit" },
        { id: 52, section: "S", term: "Sales Revenue", classification: "Revenue", statement: "Income Statement", balance: "Credit" },
        { id: 53, section: "S", term: "Selling Expenses", classification: "Operating Expense", statement: "Income Statement", balance: "Debit" },
        { id: 54, section: "S", term: "Service Revenue", classification: "Revenue", statement: "Income Statement", balance: "Credit" },
        { id: 55, section: "S", term: "Stock Investments", classification: "Current Asset/Long-Term Investment", statement: "Balance Sheet", balance: "Debit" },
        { id: 56, section: "S", term: "Supplies", classification: "Current Asset", statement: "Balance Sheet", balance: "Debit" },
        { id: 57, section: "S", term: "Supplies Expense", classification: "Operating Expense", statement: "Income Statement", balance: "Debit" },
        
        // T Section
        { id: 58, section: "T", term: "Treasury Stock", classification: "Stockholders' Equity", statement: "Balance Sheet", balance: "Debit" },
        
        // U Section
        { id: 59, section: "U", term: "Unearned Service Revenue", classification: "Current Liability", statement: "Balance Sheet", balance: "Credit" },
        { id: 60, section: "U", term: "Utilities Expense", classification: "Operating Expense", statement: "Income Statement", balance: "Debit" }
    ];

    // DOM elements
    const flashcard = document.getElementById('flashcard');
    const cardSection = document.getElementById('cardSection');
    const termText = document.getElementById('termText');
    const classificationText = document.getElementById('classificationText');
    const statementText = document.getElementById('statementText');
    const balanceText = document.getElementById('balanceText');
    const currentCardNum = document.getElementById('currentCardNum');
    const totalCards = document.getElementById('totalCards');
    const progressBar = document.getElementById('progressBar');
    const alphabetFilter = document.getElementById('alphabetFilter');
    const typeFilter = document.getElementById('typeFilter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const randomBtn = document.getElementById('randomBtn');
    const flipBtn = document.getElementById('flipBtn');

    // Application state
    let currentCardIndex = 0;
    let isFlipped = false;
    let currentSectionFilter = 'All';
    let currentTypeFilter = 'All';
    let filteredCards = [...flashcardsData];

    // Create alphabet filter buttons
    function createAlphabetFilter() {
        const sections = ['All', ...new Set(flashcardsData.map(card => card.section))].sort();
        
        sections.forEach(section => {
            const button = document.createElement('button');
            button.textContent = section;
            button.className = `filter-button ${section === 'All' ? 'active' : ''}`;
            button.addEventListener('click', () => {
                document.querySelectorAll('#alphabetFilter .filter-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
                currentSectionFilter = section;
                filterCards();
            });
            alphabetFilter.appendChild(button);
        });
    }

    // Create classification filter buttons
    function createTypeFilter() {
        const types = [
            'All', 
            'Current Asset', 
            'Current Asset—Contra',
            'Plant Asset',
            'Plant Asset—Contra', 
            'Intangible Asset',
            'Current Liability',
            'Long-Term Liability',
            'Long-Term Liability—Contra',
            'Stockholders\' Equity',
            'Revenue',
            'Revenue—Contra',
            'Operating Expense',
            'Other Income',
            'Other Expense',
            'Cost of Goods Sold',
            'Income Tax Expense'
        ];
        
        types.forEach(type => {
            const button = document.createElement('button');
            button.textContent = type;
            button.className = `filter-button type-filter-button ${type === 'All' ? 'active' : ''}`;
            button.addEventListener('click', () => {
                document.querySelectorAll('#typeFilter .filter-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
                currentTypeFilter = type;
                filterCards();
            });
            typeFilter.appendChild(button);
        });
    }

    // Filter cards based on current filters
    function filterCards() {
        filteredCards = flashcardsData.filter(card => {
            const matchesSection = currentSectionFilter === 'All' || card.section === currentSectionFilter;
            const matchesType = currentTypeFilter === 'All' || card.classification.includes(currentTypeFilter);
            return matchesSection && matchesType;
        });
        
        currentCardIndex = 0;
        isFlipped = false;
        totalCards.textContent = filteredCards.length;
        
        if (filteredCards.length > 0) {
            renderCard();
            flashcard.classList.remove('flipped');
        } else {
            termText.textContent = 'No cards match the selected filters';
            classificationText.textContent = '';
            statementText.textContent = '';
            balanceText.textContent = '';
            cardSection.textContent = '';
            currentCardNum.textContent = '0';
            progressBar.style.width = '0%';
        }
    }

    // Render the current card
    function renderCard() {
        if (filteredCards.length === 0) return;
        
        const card = filteredCards[currentCardIndex];
        
        termText.textContent = card.term;
        classificationText.textContent = card.classification;
        statementText.textContent = card.statement;
        
        // Set balance with appropriate color
        balanceText.textContent = card.balance;
        balanceText.className = card.balance === 'Debit' ? 'debit-balance' : 'credit-balance';
        
        cardSection.textContent = card.section;
        currentCardNum.textContent = currentCardIndex + 1;
        
        // Update progress bar
        const progress = ((currentCardIndex + 1) / filteredCards.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Event handlers
    function flipCard() {
        flashcard.classList.toggle('flipped');
        isFlipped = !isFlipped;
    }

    function nextCard() {
        if (filteredCards.length === 0) return;
        
        currentCardIndex = (currentCardIndex + 1) % filteredCards.length;
        renderCard();
        if (isFlipped) {
            flashcard.classList.remove('flipped');
            isFlipped = false;
        }
    }

    function prevCard() {
        if (filteredCards.length === 0) return;
        
        currentCardIndex = (currentCardIndex - 1 + filteredCards.length) % filteredCards.length;
        renderCard();
        if (isFlipped) {
            flashcard.classList.remove('flipped');
            isFlipped = false;
        }
    }

    function randomCard() {
        if (filteredCards.length <= 1) return;
        
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * filteredCards.length);
        } while (newIndex === currentCardIndex);
        
        currentCardIndex = newIndex;
        renderCard();
        if (isFlipped) {
            flashcard.classList.remove('flipped');
            isFlipped = false;
        }
    }

    // Initialize the application
    function init() {
        createAlphabetFilter();
        createTypeFilter();
        
        // Set up event listeners
        flashcard.addEventListener('click', flipCard);
        flipBtn.addEventListener('click', flipCard);
        prevBtn.addEventListener('click', prevCard);
        nextBtn.addEventListener('click', nextCard);
        randomBtn.addEventListener('click', randomCard);
        
        // Initial render
        totalCards.textContent = filteredCards.length;
        renderCard();
    }

    // Start the app
    init();
});
