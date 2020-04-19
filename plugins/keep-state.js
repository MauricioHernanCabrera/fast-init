export default function(context) {
  if (process.browser) {
    const { store } = context

    const dataStore = JSON.parse(localStorage.getItem('store'))

    if (dataStore) {
      const { programs, projects, commands, project } = dataStore
      if (programs) store.commit('SET_PROGRAMS', programs)
      if (projects) store.commit('SET_PROJECTS', projects)
      if (commands) store.commit('SET_COMMANDS', commands)
      if (project) store.commit('SET_PROJECT', project)
    }

    store.commit('SET_LOADING_APP', false)

    store.subscribe(() => {
      localStorage.setItem('store', JSON.stringify(store.state))
    })
  }
}
