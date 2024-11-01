<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">document.addEventListener("DOMContentLoaded", function() {
    
    const billAmountInput = document.getElementById("billAmount");
    const tipPercentageInput = document.getElementById("tipPercentage");
    const calculateButton = document.getElementById("calculate");
    const totalAmountSpan = document.getElementById("totalAmount");
    calculateButton.addEventListener("click", function() {
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = parseFloat(tipPercentageInput.value);
        if (!isNaN(billAmount) && !isNaN(tipPercentage)) {
            const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
            const totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);
            totalAmountSpan.textContent = `$${totalAmount}`;
        } else {
            totalAmountSpan.textContent = "Enter valid values";
        }
    });
});</pre>
<p>html<br>