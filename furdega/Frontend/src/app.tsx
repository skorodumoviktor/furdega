import { FC, useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { RegModal } from "./components/reg-modal"
import { Admin } from "./pages/admin"
import { Blog } from "./pages/blog"
import { Catalog } from "./pages/catalog"
import { Contacts } from "./pages/contacts"
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { Portfolio } from "./pages/portfolio"
import { Thanks } from "./pages/thanks"
import { ConfigProvider } from "antd"
import ruRU from "antd/lib/locale/ru_RU"
import "./styles/index.scss"

const App: FC = () => {
  const [showRegModal, setShowRegModal] = useState<boolean>(false)

  return (
    <BrowserRouter>
      <ConfigProvider locale={ruRU}>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/blog" component={Blog} />
          <Route path="/admin" component={Admin} />
          <Route path="/thanks" component={Thanks} />
        </Switch>

        <Footer />

        <RegModal
          show={showRegModal}
          onClose={() => {
            setShowRegModal(false)
          }}
        />
      </ConfigProvider>
    </BrowserRouter>
  )
}

export { App }
