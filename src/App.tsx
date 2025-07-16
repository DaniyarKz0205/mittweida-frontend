import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Start from "./routes/Start.tsx";
import ForestCategory from "./routes/ForestCategory.tsx";
import Forest1Navigate from "./routes/Forest1Navigate.tsx";
import Forest1Stop from "./routes/Forest1Stop.tsx";
import Forest2Navigate from './routes/Forest2Navigate.tsx';
import Forest2Stop from "./routes/Forest2Stop.tsx";
import Forest3Navigate from "./routes/Forest3Navigate.tsx";
import Forest3Stop from "./routes/Forest3Stop.tsx";
import Forest4Navigate from "./routes/Forest4Navigate.tsx";
import Forest4Stop from "./routes/Forest4Stop.tsx";
import Forest5Navigate from "./routes/Forest5Navigate.tsx";
import Forest5Stop from "./routes/Forest5Stop.tsx";
import SummaryWrapper from "./routes/SummaryWrapper.tsx";
import ForestInfo from './routes/ForestInfo.tsx'

import HilltopInfo from "./routes/HilltopInfo.tsx";
import Hilltop1Navigate from "./routes/Hilltop1Navigate.tsx";
import Hilltop1Stop from "./routes/Hilltop1Stop.tsx";
import Hilltop2Navigate from "./routes/Hilltop2Navigate.tsx";
import Hilltop2Stop from "./routes/Hilltop2Stop.tsx";
import Hilltop3Navigate from "./routes/Hilltop3Navigate.tsx";
import Hilltop3Stop from "./routes/Hilltop3Stop.tsx";
import Hilltop4Navigate from "./routes/Hilltop4Navigate.tsx";
import Hilltop4Stop from "./routes/Hilltop4Stop.tsx";

import CultureCategory from "./routes/CultureCategory.tsx";
import CultureInfo from "./routes/CultureInfo.tsx";
import Culture1Navigate from "./routes/Culture1Navigate.tsx";
import Culture1Stop from "./routes/Culture1Stop.tsx";
import Culture2Navigate from "./routes/Culture2Navigate.tsx";
import Culture2Stop from "./routes/Culture2Stop.tsx";
import Culture3Navigate from "./routes/Culture3Navigate.tsx";
import Culture3Stop from "./routes/Culture3Stop.tsx";

import AdventureCategory from "./routes/AdventureCategory.tsx";
import AdventureInfo from "./routes/AdventureInfo.tsx";
import Adventure1Navigate from "./routes/Adventure1Navigate.tsx";
import Adventure1Stop from "./routes/Adventure1Stop.tsx";
import Adventure2Navigate from "./routes/Adventure2Navigate.tsx";
import Adventure2Stop from "./routes/Adventure2Stop.tsx";
import Adventure3Navigate from "./routes/Adventure3Navigate.tsx";
import Adventure3Stop from "./routes/Adventure3Stop.tsx";

import FoodCategory from "./routes/FoodCategory.tsx";
import FoodInfo from "./routes/FoodInfo.tsx";
import Food1Navigate from "./routes/Food1Navigate.tsx";
import Food1Stop from "./routes/Food1Stop.tsx";
import Food2Navigate from "./routes/Food2Navigate.tsx";
import Food2Stop from "./routes/Food2Stop.tsx";
import Food3Navigate from "./routes/Food3Navigate.tsx";
import Food3Stop from "./routes/Food3Stop.tsx";

import ArtCategory from "./routes/ArtCategory.tsx";
import ArtInfo from "./routes/ArtInfo.tsx";
import Art1Navigate from "./routes/Art1Navigate.tsx";
import Art1Stop from "./routes/Art1Stop.tsx";
import Art2Navigate from "./routes/Art2Navigate.tsx";
import Art2Stop from "./routes/Art2Stop.tsx";
import Art3Navigate from "./routes/Art3Navigate.tsx";
import Art3Stop from "./routes/Art3Stop.tsx";

import PhotosCategory from "./routes/PhotosCategory.tsx";
import PhotosInfo from "./routes/PhotosInfo.tsx";
import Photos1Navigate from "./routes/Photos1Navigate.tsx";
import Photos1Stop from "./routes/Photos1Stop.tsx";
import Photos2Navigate from "./routes/Photos2Navigate.tsx";
import Photos2Stop from "./routes/Photos2Stop.tsx";
import Photos3Navigate from "./routes/Photos3Navigate.tsx";
import Photos3Stop from "./routes/Photos3Stop.tsx";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/summary/:routeId" element={<SummaryWrapper />} />

                <Route path="/forest-category" element={<ForestCategory />} />
                <Route path="/forest-1navigate" element={<Forest1Navigate />} />
                <Route path="/forest-1stop" element={<Forest1Stop />} />
                <Route path="/forest-2navigate" element={<Forest2Navigate />} />
                <Route path="/forest-2stop" element={<Forest2Stop />} />
                <Route path="/forest-3navigate" element={<Forest3Navigate />} />
                <Route path="/forest-3stop" element={<Forest3Stop />} />
                <Route path="/forest-4navigate" element={<Forest4Navigate />} />
                <Route path="/forest-4stop" element={<Forest4Stop />} />
                <Route path="/forest-5navigate" element={<Forest5Navigate />} />
                <Route path="/forest-5stop" element={<Forest5Stop />} />
                <Route path="/forest-info" element={<ForestInfo />} />

                <Route path="/hilltop-info" element={<HilltopInfo />} />
                <Route path="/hilltop-1navigate" element={<Hilltop1Navigate />} />
                <Route path="/hilltop-1stop" element={<Hilltop1Stop />} />
                <Route path="/hilltop-2navigate" element={<Hilltop2Navigate />} />
                <Route path="/hilltop-2stop" element={<Hilltop2Stop />} />
                <Route path="/hilltop-3navigate" element={<Hilltop3Navigate />} />
                <Route path="/hilltop-3stop" element={<Hilltop3Stop />} />
                <Route path="/hilltop-4navigate" element={<Hilltop4Navigate />} />
                <Route path="/hilltop-4stop" element={<Hilltop4Stop />} />

                <Route path="/culture-category" element={<CultureCategory />} />
                <Route path="/culture-info" element={<CultureInfo />} />
                <Route path="/culture-1navigate" element={<Culture1Navigate />} />
                <Route path="/culture-1stop" element={<Culture1Stop />} />
                <Route path="/culture-2navigate" element={<Culture2Navigate />} />
                <Route path="/culture-2stop" element={<Culture2Stop />} />
                <Route path="/culture-3navigate" element={<Culture3Navigate />} />
                <Route path="/culture-3stop" element={<Culture3Stop />} />

                <Route path="/adventure-category" element={<AdventureCategory />} />
                <Route path="/adventure-info" element={<AdventureInfo />} />
                <Route path="/adventure-1navigate" element={<Adventure1Navigate />} />
                <Route path="/adventure-1stop" element={<Adventure1Stop />} />
                <Route path="/adventure-2navigate" element={<Adventure2Navigate />} />
                <Route path="/adventure-2stop" element={<Adventure2Stop />} />
                <Route path="/adventure-3navigate" element={<Adventure3Navigate />} />
                <Route path="/adventure-3stop" element={<Adventure3Stop />} />

                <Route path="/food-category" element={<FoodCategory />} />
                <Route path="/food-info" element={<FoodInfo />} />
                <Route path="/food-1navigate" element={<Food1Navigate />} />
                <Route path="/food-1stop" element={<Food1Stop />} />
                <Route path="/food-2navigate" element={<Food2Navigate />} />
                <Route path="/food-2stop" element={<Food2Stop />} />
                <Route path="/food-3navigate" element={<Food3Navigate />} />
                <Route path="/food-3stop" element={<Food3Stop />} />

                <Route path="/art-category" element={<ArtCategory />} />
                <Route path="/art-info" element={<ArtInfo />} />
                <Route path="/art-1navigate" element={<Art1Navigate />} />
                <Route path="/art-1stop" element={<Art1Stop />} />
                <Route path="/art-2navigate" element={<Art2Navigate />} />
                <Route path="/art-2stop" element={<Art2Stop />} />
                <Route path="/art-3navigate" element={<Art3Navigate />} />
                <Route path="/art-3stop" element={<Art3Stop />} />

                <Route path="/photos-category" element={<PhotosCategory />} />
                <Route path="/photos-info" element={<PhotosInfo />} />
                <Route path="/photos-1navigate" element={<Photos1Navigate />} />
                <Route path="/photos-1stop" element={<Photos1Stop />} />
                <Route path="/photos-2navigate" element={<Photos2Navigate />} />
                <Route path="/photos-2stop" element={<Photos2Stop />} />
                <Route path="/photos-3navigate" element={<Photos3Navigate />} />
                <Route path="/photos-3stop" element={<Photos3Stop />} />

            </Routes>
        </BrowserRouter>
    );
}
