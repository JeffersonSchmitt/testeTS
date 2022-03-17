import { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardOptions from '../components/cardOptions/cardOptions';
import CardCustom from '../components/cardProduct/cardCustom';
import NavBarCustom from '../components/navBar/navBar';
import api from '../service/api';



class AppInit extends Component {

    state = {
        products: [],
        ingredients: [],
        extras: [],
        cart: [],
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
        const { products, ingredients } = this.state;

        return (
            <>
                <NavBarCustom />
                <Container>
                    <Row>
                        <Col sm={6}>
                            {products.map(({ id, nm_product, description, vl_price, vl_discount }) => (
                                <CardCustom key={id} nameProduct={nm_product} description={description} valuePrice={vl_price} valueDiscount={vl_discount} />
                            ))},
                        </Col>
                        <Col sm={6}>
                            <CardOptions ingredients={ingredients} />
                        </Col>
                    </Row>
                    {/* <CartAlert /> */} {/* ui do componente do alert da ação de clicar no botão adicionar */}

                </Container>

            </>
        );
    };
}
export default AppInit;