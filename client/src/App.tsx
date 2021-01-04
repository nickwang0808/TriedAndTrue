import { ApolloProvider } from "@apollo/client";
import {
  IonApp,
  IonIcon,
  IonLabel,
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
import React from "react";
import { Redirect, Route } from "react-router-dom";
import listIcon from "./assets/svg/listIcon.svg";
import mealPlanIcon from "./assets/svg/mealPlanIcon.svg";
import profileIcon from "./assets/svg/profileIcon.svg";
import recipeIcon from "./assets/svg/recipeIcon.svg";
import client from "./config/apoloConfig";
import AddRecipe from "./pages/addRecipe/AddRecipe";
import MealPlannerMainPage from "./pages/mealPlanner/MealPlannerMainPage";
import RecipeDetailsPage from "./pages/recipeDetails/RecipeDetailsPage";
import RecipePage from "./pages/recipes/RecipePage";
import "./style.css";
/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  setupConfig({
    rippleEffect: false,
    mode: "md",
  });

  return (
    <ApolloProvider client={client}>
      {/* <AuthChecker> */}
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/recipes" component={RecipePage} exact={true} />
              <Route
                path="/meal-plan"
                component={RecipeDetailsPage}
                exact={true}
              />
              <Route path="/lists" component={AddRecipe} />
              <Route path="/profile" component={MealPlannerMainPage} />
              <Route
                path="/"
                render={() => <Redirect to="/tab1" />}
                exact={true}
              />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="recipes" href="/recipes">
                <IonIcon src={recipeIcon} color="primary" />
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
      {/* </AuthChecker> */}
    </ApolloProvider>
  );
};

export default App;
