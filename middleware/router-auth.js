export default function({ store, redirect, route }) {
  if (store.state.user != null && route.name === 'login') {
    redirect('/app')
  }
  if (store.state.user == null && isSecureRoute(route)) {
    redirect('/login')
  }
}

function isSecureRoute(route) {
  if (route.matched.some(record => record.path === '/app')) {
    return true
  }
}
