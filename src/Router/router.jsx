import Home from "../Pages/Home/home"
import LoginSignUp from "../Pages/Login-SignUp/loginSignUp"
import { OrderDetails } from "../Pages/OrderDetails/orderDetails"
import { ProductDetail } from "../Pages/ProductDetails/productDetails"
import { notFound } from "../Pages/NotFound/notFound"
import { CartProduct } from "../Pages/Cart/cart"

const routes = [
    {
        path:'/',
        page: Home,
        isShowHeader: true,
    },
    {
        path:'/orderdetails/:productId',
        page: OrderDetails,
        isShowHeader: false,
    },
    // {
    //     path:'/type',
    //     page: TypeProducts,
    //     isShowHeader: true,
    // },
    {
        path:'/cart',
        page: CartProduct,
        isShowHeader: true,
    },
    {
        path:'/login',
        page: LoginSignUp,
        isShowHeader: false,
    },
    {
        path:'/productdetails/:productId',
        page: ProductDetail,
        isShowHeader: false,
    },
    {
        path:'*',
        page: notFound ,
    }
]
export default routes