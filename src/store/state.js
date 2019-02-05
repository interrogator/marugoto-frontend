/* */

// State

export default ({
  global: {
  
  },
  status: {
    isLoged: false,
    role: '',
    token: '',
    refreshToken: '',
  },
  layout: {
    notebook: {
      opened: false,
      disabled: false,
    },
    mail: {
      opened: false,
      disabled: false,
    },
    dialog: {
      opened: false,
    }
  },
  topic: {
    selected: false,
    id: undefined,
    list: [],
  },
  mailNotifications: [],
  mails: [],
  notebook: {
    notebookEntries: [],
    personalNotes: [],
  },
  storylineState: {},
  pageTransitionStates: [],
  pageComponents: [],
  page: {},
});