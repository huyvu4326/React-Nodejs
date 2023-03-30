import { useEffect, useState } from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { deleteProducts, getProducts } from './api/product';
import './App.css'
import AdminLayout from './components/adminLayout';
import RootLayout from './components/rootLayout';
import ProductList from './components/ProductList';
import { IProduct } from './interfaces/product';
import Signin from './pages/Signin';
function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
        const { data } = await getProducts();
        setProducts(data);
    })()
  },[])
  const onHandleRemove = async (id:string|number) => {
    try {
      const {data} = await deleteProducts(id)
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<RootLayout />}>
            <Route path='' index element="Home Page" />
            <Route path='contact' index element="Contact Page" />
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='products' index element={<ProductList onRemove={onHandleRemove} products={products} />} />
            <Route path='login' index element={<Signin/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
