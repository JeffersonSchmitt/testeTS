import { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CartAlert from '../components/addCartAlert/CartAlert';
import CardOptions from '../components/cardOptionsAdd/cardOptions';
import CardCustom from '../components/cardProduct/cardCustom';
import NavBarCustom from '../components/navBar/navBar';
import api from '../service/api'



class AppInit extends Component {

    state = {
        products: [],
        ingredients: [],
        extras: [],
    }

    async componentDidMount() {
        const response = await api.get('test-frontend/products');
        this.setState({ products: response.data });
        this.getIngredients(this.state.products);
        this.getExtras(this.state.products);
    }

    getIngredients(products) {
        for (let i = 0; i < products.length; i++) {
            this.setState({ ingredients: products[i].ingredients[i].itens })
        }
    }
    getExtras(products) {
        for (let i = 0; i < products.length; i++) {
            this.setState({ extras: products[i].ingredients[i + 1] })
        }
    }

    render() {
        const { products } = this.state;
        const { ingredients } = this.state;

        return (
            <>
                <NavBarCustom />
                <Container>
                    <Row>
                        <Col sm={6}>
                            {products.map(product => (
                                <CardCustom key={product.id} nm_product={product.nm_product} description={product.description} vl_price={product.vl_price} vl_discount={product.vl_discount} />
                            ))},
                        </Col>
                        <Col sm={6}>
                            <CardOptions ingredients={ingredients} />
                        </Col>
                    </Row>
                    {/* <CartAlert /> */}
                </Container>

            </>
        );
    };
}
export default AppInit;