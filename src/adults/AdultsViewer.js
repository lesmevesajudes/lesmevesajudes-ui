//@flow
import React, { Component } from "react";
import type {Adult, PersonRole} from "./AdultsTypes";
import { Trans, translate } from "react-i18next";
import { Grid } from "material-ui";
import { withStyles } from "material-ui/styles/index";
import Icon from "material-ui/Icon";
import {esAltresNoFamiliars, esAltresFamiliars, esSustentador} from "../shared/selectorUtils";
const styles = () => ({
	root: {
		flexGrow: 1
	}
});

type Props = {
	adults: Array<Adult>,
	onRemoveClick: Function,
	onUpdateClick: Function,
	onAddAdultClick: (x: PersonRole) => void,
	classes: Object
};

class AdultsViewer extends Component<Props, void> {
	renderAdultsList(adults: Array<Adult>) {
		return (
			<Grid container alignItems={"stretch"}>
				<Grid item xs sm={10}>
					<Grid container wrap={"wrap"}>
						<Grid className={"border-family"} item sm={6}>
							<Grid container>
								<Grid item xs sm={12}>
									<span className={"titleTypePerson"}>Pares</span>
								</Grid>
								{ adults.filter(adult => esSustentador(adult)).map(adult => (
									<Grid item sm={6} key={adult.id}>
										<Grid container spacing={8}>
											<li className={"ItemParent"} key={adult.id} data-test={adult.nom}>
												<Grid item sm={12} >
													<span
														onClick={() => this.props.onUpdateClick(adult.id)}
													>
														{adult.nom}
														<br />
														{adult.data_naixement}
													</span>
												</Grid>
												<Grid item sm={12}>
													<button
														className="littlebutton"
														key={"delete" + adult.id}
														onClick={() => this.props.onRemoveClick(adult.id)}
													>
														<i className="material-icons">delete</i>
													</button>
												</Grid>
											</li>
										</Grid>
									</Grid>
								))}

								{adults.filter(adult => esSustentador(adult)).length !== 2 && (
									<Grid item sm={12} className={"rightButton"}>
										<span
											id="AddParentButton"
											onClick={() => this.props.onAddAdultClick("pares")}
										>
											<Icon>add_circle</Icon>
										</span>
									</Grid>
								)}
							</Grid>
						</Grid>
						<Grid className={"border-family"} item sm={6}>
							<Grid container>
								<Grid item xs sm={12}>
									<span className={"titleTypePerson"}>Altres familiars</span>
								</Grid>
								{adults
									.filter(adult => esAltresFamiliars(adult))
									.map(adult => (
										<Grid item sm={6} key={adult.id}>
											<Grid container spacing={8}>
												<li className={"ItemParent"} key={adult.id} data-test={adult.nom}>
													<Grid item sm={12}>
														<span
															onClick={() => this.props.onUpdateClick(adult.id)}
														>
															{adult.nom}
															<br />
															{adult.data_naixement}
														</span>
													</Grid>
													<Grid item sm={12}>
														<button
															className="littlebutton"
															key={"delete" + adult.id}
															onClick={() => this.props.onRemoveClick(adult.id)}
														>
															<i className="material-icons">delete</i>
														</button>
													</Grid>
												</li>
											</Grid>
										</Grid>
									))}
								<Grid item sm={12} className={"rightButton"}>
									<span
										id="AddOtherFamilyButton"
										onClick={() =>
											this.props.onAddAdultClick("altres_adults_familiars")
										}
									>
										<Icon>add_circle</Icon>
									</span>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid container wrap={"wrap"} className={"fixFlex"}>
						<Grid className={"border-family"} item sm={12}>
							<Grid container>
								<Grid item xs sm={12}>
									<span className={"titleTypePerson"}>Fills</span>
								</Grid>
								{adults.filter(adult => adult.rol === "fill").map(adult => (
									<Grid item sm={4} key={adult.id}>
										<Grid container spacing={8}>
											<li className={"ItemParent"} key={adult.id} data-test={adult.nom}>
												<Grid item sm={12}>
													<span
														onClick={() => this.props.onUpdateClick(adult.id)}
													>
														{adult.nom}
														<br />
														{adult.data_naixement}
													</span>
												</Grid>
												<Grid item sm={12}>
													<button
														className="littlebutton"
														key={"delete" + adult.id}
														onClick={() => this.props.onRemoveClick(adult.id)}
													>
														<i className="material-icons">delete</i>
													</button>
												</Grid>
											</li>
										</Grid>
									</Grid>
								))}
								<Grid item sm={12} className={"rightButton"}>
									<span
										id="AddChildButton"
										onClick={() => this.props.onAddAdultClick("fill")}
									>
										<Icon>add_circle</Icon>
									</span>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs sm={2} className={"border-family"}>
					<Grid container justify={"space-between"} direction={"column"}>
						<Grid item xs sm={12}>
							<span className={"titleTypePerson"}>
								Altres adults no familiars
							</span>
						</Grid>
						{adults
							.filter(adult => esAltresNoFamiliars(adult))
							.map(adult => (
								<Grid item sm={12} key={adult.id}>
									<Grid container direction={"column"} spacing={8}>
										<li className={"ItemParent"} key={adult.id} data-test={adult.nom}>
											<Grid item sm={12}>
												<span
													onClick={() => this.props.onUpdateClick(adult.id)}
												>
													{adult.nom}
													<br />
													{adult.data_naixement}
												</span>
											</Grid>
											<Grid item sm={12}>
												<button
													className="littlebutton"
													key={"delete" + adult.id}
													onClick={() => this.props.onRemoveClick(adult.id)}
												>
													<i className="material-icons">delete</i>
												</button>
											</Grid>
										</li>
									</Grid>
								</Grid>
							))}
						<Grid item sm={12} className={"rightButton"}>
							<span
								id="AddOtherAdultButton"
								onClick={() => this.props.onAddAdultClick("altres_adults")}
							>
								<Icon>add_circle</Icon>
							</span>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}

	render() {
		return (
			<div className="container-family">
				<div className="bg-family">
					<h1>
						<Trans>Persones de la unitat de convivència</Trans>
					</h1>
					<Grid container className="AdultsViewerPage">
						<Grid item xs={12}>
							{this.renderAdultsList(this.props.adults)}
						</Grid>
					</Grid>
				</div>
				<div className="fixFlex">
					<span>
						<Icon>add_circle</Icon> <span>Afegir un altre família</span>
					</span>
				</div>
			</div>
		);
	}
}

export default translate("translations")(withStyles(styles)(AdultsViewer));
