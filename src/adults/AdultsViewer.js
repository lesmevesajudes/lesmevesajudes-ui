//@flow
import React, { Component } from "react";
import type { Adult } from "./AdultsTypes";
import { Trans, translate } from "react-i18next";
import { Grid } from "material-ui";
import { withStyles } from "material-ui/styles/index";
import Icon from "material-ui/Icon";

const styles = () => ({
	root: {
		flexGrow: 1
	}
});

type Props = {
	adults: Array<Adult>,
	onRemoveClick: Function,
	onUpdateClick: Function,
	onAddAdultClick: Function,
	classes: Object
};

class AdultsViewer extends Component<Props, void> {
	renderAdultsList(adults: Array<Adult>) {
		console.log(adults);
		return (
			<Grid container alignItems={"stretch"}>
				<Grid item xs sm={10}>
					<Grid container wrap={"wrap"}>
						<Grid className={"border-family"} item sm={6}>
							<Grid container>
								<Grid item xs sm={12}>
									<span className={"titleTypePerson"}>Pares</span>
								</Grid>
								{adults.filter(adult => adult.rol === "pares").map(adult => (
									<Grid item sm={6}>
										<Grid container spacing={8}>
											<li className={"ItemParent"} key={adult.id}>
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

								{adults.filter(adult => adult.rol === "pares").length !== 2 && (
									<Grid item sm={12} className={"rightButton"}>
										<span
											id="AddAdultButton"
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
									.filter(adult => adult.rol === "altres_adults_familiars")
									.map(adult => (
										<Grid item sm={6}>
											<Grid container spacing={8}>
												<li className={"ItemParent"} key={adult.id}>
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
										id="AddAdultButton"
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
								{adults.filter(adult => adult.rol === "fills").map(adult => (
									<Grid item sm={4}>
										<Grid container spacing={8}>
											<li className={"ItemParent"} key={adult.id}>
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
										id="AddAdultButton"
										onClick={() => this.props.onAddAdultClick("fills")}
									>
										<Icon>add_circle</Icon>
									</span>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs sm={2} className={"border-family-right"}>
					<Grid container justify={"space-between"} direction={"column"}>
						<Grid item xs sm={12}>
							<span className={"titleTypePerson"}>
								Altres adults no familiars
							</span>
						</Grid>
						{adults
							.filter(adult => adult.rol === "altres_adults")
							.map(adult => (
								<Grid item sm={12}>
									<Grid container direction={"column"} spacing={8}>
										<li className={"ItemParent"} key={adult.id}>
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
								id="AddAdultButton"
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
