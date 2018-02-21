import React from "react";

class FamilyBenefits extends React.Component<void> {
    // There are no family benefits (At least in codeas HG_077_mensual should be familia benefit)
    renderFamilyBenefitList(family) {
        let possibleBenefits = [];
        return (
            <ul className="ItemList">
                {possibleBenefits.map((benefit, family)  => (<li> {benefit} - {family[benefit]}</li>))}
            </ul>);
    }

    render() {
        return (
            <div>
                {this.renderFamilyBenefitList(this.props.family)}
            </div>
        );
    }
}

export default FamilyBenefits;