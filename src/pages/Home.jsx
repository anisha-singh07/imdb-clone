/*component types- class based component & function based component
    function based component, 2 ways: 
    1.function Home()
        {
            return ();
        }
    2.const Home = (props) => {
            return ();
        }

    export default Home;
*/

import Header from '../components/common/Header'

const Home = () => {
    return (
        <div>
            <Header/>
            home it is
        </div>
    )
}
export default Home;
//default export