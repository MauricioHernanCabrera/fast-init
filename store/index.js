export const state = () => ({
  loadingApp: true,

  programs: [],

  projects: [],

  project: {},

  commands: [],

  dialog: {
    data: {},
    active: '',
    title: '',
    nameBtnSubmit: 'Accept'
  }
})

export const getters = {
  getProjects(state) {
    return state.projects.map(project => ({
      ...project,
      commands: project.commands.map(command => ({
        ...command,
        program: state.programs.find(program => program._id == command.program)
      }))
    }))
  },

  getCommands(state) {
    return state.commands
      .map(command => ({
        ...command,
        program: state.programs.find(program => program._id == command.program)
      }))
      .filter(command => command.program && command.program._id)
  }
}

export const mutations = {
  SET_LOADING_APP(state, payload) {
    state.loadingApp = payload
  },

  SET_DIALOG(
    state,
    { data = {}, active = '', title = '', nameBtnSubmit = 'Accept' }
  ) {
    state.dialog.data = JSON.parse(JSON.stringify(data))
    state.dialog.nameBtnSubmit = nameBtnSubmit
    state.dialog.title = title
    state.dialog.active = active
  },

  CANCEL_DIALOG(
    state,
    { data = {}, active = '', title = '', nameBtnSubmit = 'Accept' }
  ) {
    state.dialog.data = JSON.parse(JSON.stringify(data))
    state.dialog.nameBtnSubmit = nameBtnSubmit
    state.dialog.title = title
    state.dialog.active = active
  },

  SET_PROGRAMS: (state, payload) => {
    state.programs = payload
  },

  ADD_PROGRAM: (state, payload) => {
    state.programs.push({
      ...payload,
      _id: Date.now()
    })
  },

  REMOVE_PROGRAM: (state, payload) => {
    const index = state.programs.findIndex(
      program => program._id === payload._id
    )
    state.programs.splice(index, 1)
  },

  UPDATE_PROGRAM: (state, payload) => {
    const index = state.programs.findIndex(
      program => program._id == payload._id
    )
    state.programs.splice(index, 1, payload)
  },

  ADD_PROJECT: (state, payload) => {
    state.projects.push({
      ...payload,
      commands: [],
      _id: Date.now()
    })
  },

  REMOVE_PROJECT: (state, payload) => {
    const index = state.projects.findIndex(
      program => program._id === payload._id
    )
    state.projects.splice(index, 1)
  },

  UPDATE_PROJECT: (state, payload) => {
    const index = state.projects.findIndex(
      program => program._id == payload._id
    )
    const { commands, ...newItem } = payload

    state.projects.splice(index, 1, {
      ...newItem,
      commands: commands.map(command => ({
        ...command,
        program: command.program._id
      }))
    })
  },

  SET_PROJECT: (state, payload) => {
    state.project = payload
  },

  SET_PROJECTS: (state, payload) => {
    state.projects = payload
  },

  SET_COMMANDS: (state, payload) => {
    state.commands = payload
  },

  ADD_COMMAND: (state, payload) => {
    state.commands.push({
      ...payload,
      _id: Date.now()
    })
  },

  REMOVE_COMMAND: (state, payload) => {
    const index = state.commands.findIndex(
      program => program._id === payload._id
    )
    state.commands.splice(index, 1)
  },

  UPDATE_COMMAND: (state, payload) => {
    const index = state.commands.findIndex(
      program => program._id == payload._id
    )
    state.commands.splice(index, 1, payload)
  }
}
