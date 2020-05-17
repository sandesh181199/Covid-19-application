import React from 'react';

import {Cards,Charts,CountryPicker} from './components';
import styles from './App.module.css'
import {fetchData} from './api';

import CoronaImage from './Images/covidimage.png'

class App extends React.Component {

    state = {
        data : {},
        country : '',
    }

    async componentDidMount(country) {
        const fetchedData= await fetchData(country);

        this.setState({ data: fetchedData})
    }

    handleCountryChange = async (country) =>{
        
        const fetchedData = await fetchData(country);
         this.setState({data: fetchedData , country : country})
     

    }
    render() {
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={CoronaImage} alt="Covid-19"/>
               <Cards data= {data}/>
               < CountryPicker handleCountryChange= {this.handleCountryChange}/>
               <Charts data = {data} Country= {country}/>
               
            </div>
        )
    }
}
export default App;