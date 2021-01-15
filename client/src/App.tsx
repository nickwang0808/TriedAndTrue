import { ApolloProvider } from "@apollo/client";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupConfig,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import listIcon from "./assets/svg/listIcon.svg";
import mealPlanIcon from "./assets/svg/mealPlanIcon.svg";
import profileIcon from "./assets/svg/profileIcon.svg";
import recipeIcon from "./assets/svg/recipeIcon.svg";
import client from "./config/apoloConfig";
import AddOrEditRecipeModal from "./pages/addOrEditRecipeModal/AddOrEditRecipeModal";
import AuthChecker from "./pages/auth/AuthChecker";
import MealPlannerMainPage from "./pages/mealPlanner/MealPlannerMainPage";
import AddMultiRecipeToPlannerModal from "./pages/mealPlanner/PlannerModals/AddMultiRecipeToPlannerModal/AddMultiRecipeToPlannerModal";
import EditPlannerItemModal from "./pages/mealPlanner/PlannerModals/EditPlannerItemModal/EditPlannerItemModal";
import RecipeDetailsPage from "./pages/recipeDetails/RecipeDetailsPage";
import RecipePage from "./pages/recipes/RecipePage";
import { setDateRange } from "./redux/Planner/PlannerDateRangeSlice";
import "./style.css";
/* Theme variables */
import "./theme/variables.css";
import getDatesForPlanner from "./utils/getDatesForPlanner";

const App: React.FC = () => {
  setupConfig({
    // rippleEffect: false,
    mode: "md",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const dates = getDatesForPlanner();
    dispatch(setDateRange(dates));
  }, []);

  return (
    <ApolloProvider client={client}>
      <AuthChecker>
        <IonApp>
          <AddOrEditRecipeModal />
          <AddMultiRecipeToPlannerModal />
          <EditPlannerItemModal />

          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                <Route path="/recipes" component={RecipePage} exact={true} />
                <Route
                  path="/meal-plan"
                  exact={true}
                  component={MealPlannerMainPage}
                />
                <Route
                  path="/lists"
                  component={() => (
                    <IonPage>
                      <h1>Coming Soon</h1>
                    </IonPage>
                  )}
                />
                <Route
                  path="/profile"
                  component={() => (
                    <IonPage>
                      <h1>Coming Soon</h1>
                    </IonPage>
                  )}
                />

                {/* <Route path="/add-recipe/:id" component={AddRecipePage} /> */}
                <Route
                  path="/recipe-details/:id"
                  component={RecipeDetailsPage}
                />

                <Route
                  exact
                  path="/"
                  component={() => <Redirect to="/recipes" />}
                />
              </IonRouterOutlet>

              <IonTabBar slot="bottom">
                <IonTabButton tab="recipes" href="/recipes">
                  <IonIcon src={recipeIcon} />
                  <IonLabel>Recipes</IonLabel>
                </IonTabButton>
                <IonTabButton tab="meal-plan" href="/meal-plan">
                  <IonIcon src={mealPlanIcon} />
                  <IonLabel>Meal Plan</IonLabel>
                </IonTabButton>
                <IonTabButton tab="lists" href="/lists">
                  <IonIcon src={listIcon} />
                  <IonLabel>Lists</IonLabel>
                </IonTabButton>
                <IonTabButton tab="profile" href="/profile">
                  <IonIcon src={profileIcon} />
                  <IonLabel>Profile</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        </IonApp>
      </AuthChecker>
    </ApolloProvider>
  );
};

export default App;
