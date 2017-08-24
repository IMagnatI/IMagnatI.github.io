
import { Calculator } from './Calculator';

class DecCalculator extends Calculator {
    constructor(settings) {
        super(settings);
        console.log(this.getName());

        this.displayedTooltip = false;
    }

    changeNumber(root) {
        let activeElement = root.find('.active');
        activeElement.attr("contenteditable", true);
        activeElement.trigger('focus');
        if (!this.displayedTooltip) {
            this.showTooltip();
            this.displayedTooltip = true;
        }
    }

    showTooltip() {
        const tooltip = $('.tooltip');
        tooltip.show();
    }

    hideTooltip() {
        const tooltip = $('.tooltip');
        tooltip.hide();
    }

    add(numberX, numberY) {
        let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (let i = numberX.length - 1; i >= 0; i--) {
            result[i] += numberX[i] + numberY[i];

            if (result[i] > 9) {
                result[i - 1] = 1;
                result[i] = result[i] % 10;
            }
        }
        console.log(result);
        return result;
    }

    updateResult() {
        let root = this.$calculatorDOMElement;
        let $resultNumber = root.children('.group-number')
            .children('.result-bit');

        for (let i = this.resultNumberArray.length - 1, j = 0; i >= 0; i-- , j++) {
            $resultNumber.eq(j).children('.active').text(this.resultNumberArray[i]);
        }
    }

    checkInput(event) {
        console.log(event);
        if (event.originalEvent.keyCode === 8 || event.originalEvent.keyCode === 46) {
            return true;
        }
        if (event.originalEvent.keyCode > 57 || event.originalEvent.keyCode < 48) {
            return false;
        }
        if ($(event.target).text().length >= 1) {
            return false;
        }
        return true;
    }

    initEvents() {
        super.initEvents();

        this.$calculatorDOMElement.find('.operator-bar span')
            .on('click', (event) => {
                this.checkNumber();
                this.updateResult();
            })

        this.$calculatorDOMElement.find('.active').bind({
            keydown: this.checkInput
        })

        this.$calculatorDOMElement.find('.tooltip')
            .on('click', (event) => {
                this.hideTooltip();
            })
    }
}
export { DecCalculator };
