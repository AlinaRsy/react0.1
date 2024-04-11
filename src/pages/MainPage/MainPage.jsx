import Catalog from "../../components/Catalog/Catalog";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
export default function MainPage({cart, setCart}){
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);
    function handleChange(e){
        setSearch(e.target.value);
    }
    async function fetchProducts(){
        const response = await fetch('https://dummyjson.com/products')
        const products = await response.json();
        setProducts(products.products);
    }
    useEffect(()=>{
        fetchProducts();
    }, []);
    const setCategories = new Set(products.map((product)=>product.category)) ;
    const categories = Array.from(setCategories);
    const [category, setCategory] = useState(0);
    
    const [sort, setSort] = useState(0);
    function sorting(e){
        setSort(e.target.value);
    }
    return(
        <>
        <div className="container">
        <Form style={{margin:'40px 0 0 0'}} inline>
            <Row>
            <Col xs="auto">
                <Form.Control
                onChange={handleChange}
                value={search}
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                />
            </Col>
            <Col xs="auto">
                <Button>Поиск по товарам</Button>
            </Col>
            </Row>
        </Form>
        <div className="filters" style={{paddingTop:'20px',display:'flex', gap:'20px', alignItems:'center'}}>
            <div className="categories" style={{ display:'flex', gap:'10px'}}>
                <a style={{textDecoration:'none', padding:'5px 10px', borderRadius:'20px', color:'white', background:'indigo'}} href="#" onClick={(e)=>{e.preventDefault(); setCategory(0)}}>Все товары</a>
                {
                    categories.map(category=><a style={{textDecoration:'none', padding:'5px 10px', borderRadius:'20px', color:'white', background:'indigo'}} href="#" onClick={(e)=>{e.preventDefault(); setCategory(category)}}>{category}</a>)
                }
            </div>
            <select value={sort} onChange={sorting}>
                <option selected hidden value="0">Сортировать товары</option>
                <option value="1">Сначaла дорогие</option>
                <option value="2">Сначaла дешевые</option>
            </select>
        </div>
       
        <Catalog search={search} cart={cart} setCart={setCart} sort={sort} category={category}/>
        </div>
        </>
    )
}