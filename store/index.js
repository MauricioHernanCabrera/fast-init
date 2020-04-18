export const state = () => ({
  programs: [
    {
      _id: 1,
      name: 'Chrome',
      url: `C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe`
    },
    {
      _id: 2,
      name: 'Slack',
      url: `C:\\Users\\algui\\AppData\\Local\\slack\\slack.exe`
    },
    {
      _id: 3,
      name: 'Postman',
      url: 'C:\\Users\\algui\\AppData\\Local\\Postman\\Postman.exe'
    }
  ],

  projects: [
    {
      _id: 11,
      name: 'GECO',
      commands: [
        {
          _id: 22,
          program: 1,
          url: ''
        }
      ]
    }
  ],

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
  }
}

export const mutations = {
  SET_DIALOG: (
    state,
    { data = {}, active = '', title = '', nameBtnSubmit = 'Accept' }
  ) => {
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
    const oldItem = state.projects[index]
    const { commands, ...newItem } = payload

    state.projects.splice(index, 1, {
      ...oldItem,
      ...newItem
    })
  },

  SET_PROJECT: (state, payload) => {
    state.project = payload
  }
}

export const actions = {
  updateActionValue({ commit }) {
    commit('updateValue', payload)
  }
}
