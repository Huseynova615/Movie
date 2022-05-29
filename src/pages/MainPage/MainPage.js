import React from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

function MainPage() {
        return (
            <div className="main-page">
                <Header />
                <main className="content">
                    <section className="main-section">
                        <div className="search-box">
                            <SearchBox />
                        </div>
                        <div className="main-mov">
                            <Movies />
                        </div>
                    </section>
                    <aside className="main-favs">
                        <Favorites />
                    </aside>
                </main>
            </div>
        )
}
 
export default MainPage;