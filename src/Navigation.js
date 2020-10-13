import React from 'react'
import { Switch, Route } from "react-router-dom";
import DetailPage from './Components/DetailMovie Page/DetailPage';
import MoviesListing from './Components/MoviesListing/MoviesListing';


export default function Navigation() {
    return (
        <Switch>
            <Route path="/" exact>
                <MoviesListing />
            </Route>
            <Route path='/detailPage/:id' exact>
                <DetailPage />
            </Route>
        </Switch>
    )
}
