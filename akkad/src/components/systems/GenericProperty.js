import {PropTypes} from "react";
import AbstractSystemComponent from "../AbstractSystemComponent";

class GenericProperty extends AbstractSystemComponent {
    static contextTypes = {
        entityID: PropTypes.string,
        appState: PropTypes.object,
        actions: PropTypes.object
    }

    static propTypes = {
        propertyName: PropTypes.string.isRequired,
        onVal: PropTypes.any.isRequired,
        offVal: PropTypes.any
    }

    valChanged = (nextProps) => {
        if (
            nextProps.onVal !== this.props.onVal ||
            nextProps.offVal !== this.props.offVal
        ) {
            return true;
        }

        return false;
    }

    shouldComponentUpdate(nextProps) {
        return this.valChanged(nextProps);
    }

    updatePropertyValue = (val) => {
        const {appState, entityID} = this.context;
        const {propertyName} = this.props;

        const entity = appState.getIn(["entities", entityID, "entity"]);

        entity[propertyName] = val;
    }

    componentWillMount() {
        const {onVal} = this.props;

        this.updatePropertyValue(onVal);
    }

    componentWillUpdate(nextProps) {
        if (this.valChanged(nextProps)) {
            const {onVal} = this.props;
            this.updatePropertyValue(onVal);
        }
    }

    componentWillUnmount() {
        const {offVal} = this.props;

        this.updatePropertyValue(offVal);
    }
}

export default GenericProperty;
