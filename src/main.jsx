import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx'
import { store } from './redux/store.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render( 
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
