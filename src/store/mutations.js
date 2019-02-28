/* eslint no-unused-vars: 0 */

// Mutations

import * as types from './types';

export default({
  // AUTH MUTATIONS
  [types.AUTH_SUCCESS] (state, payload) {
    state.status.isLoged = true;
    state.status.role = 'player';
    state.status.token = payload.token;
    state.status.refreshToken = payload.refreshToken;
  },
  [types.AUTH_ERROR] (state ) {
    state.status.isLoged = false;
    state.status.role = '';
    state.status.token = '';
    state.status.refreshToken = '';
  },
  [types.LOGOUT] (state ) {
    state.status.isLoged = false;
    state.status.role = '';
    state.status.token = '';
    state.status.refreshToken = '';
  },
  [types.UPDATE_TOKEN] (state, payload ) {
    state.status.token = payload.token;
    state.status.refreshToken = payload.refreshToken;
  },
  // LAYOUT MUTATIONS
  [types.LAYOUT_OPEN] (state, payload) {
    switch(payload) {
      case 'notebook':
        state.layout.notebook.opened = true;
        state.layout.mail.opened = false;
        state.layout.notebook.disabled = false;
        state.layout.mail.disabled = false;
        state.layout.dialog.opened = false;
        break;
      case 'mail':
        state.layout.notebook.opened = false;
        state.layout.mail.opened = true;
        state.layout.notebook.disabled = false;
        state.layout.mail.disabled = false;
        state.layout.dialog.opened = false;
        break;
      case 'dialog':
        state.layout.notebook.opened = false;
        state.layout.mail.opened = false;
        state.layout.notebook.disabled = true;
        state.layout.mail.disabled = true;
        state.layout.dialog.opened = true;
        break;
      default:
        state.layout.notebook.opened = false;
        state.layout.mail.opened = false;
        state.layout.notebook.disabled = false;
        state.layout.mail.disabled = false;
        state.layout.dialog.opened = false;
    }
  },
  [types.LAYOUT_CLOSE] (state, payload) {
    switch(payload) {
      case 'notebook':
        state.layout.notebook.opened = false;
        break;
      case 'mail':
        state.layout.mail.opened = false;
        break;
      case 'dialog':
        state.layout.dialog.opened = false;
        break;
      default:
        state.layout.notebook.opened = false;
        state.layout.mail.opened = false;
        state.layout.dialog.opened = false;
    }
  },
  // TOPIC MUTATIONS
  [types.UPDATE_TOPIC_LIST] (state, payload) {
    state.topic.list = payload;
  },
  [types.CHOOSE_TOPIC] (state, payload) {
    state.topic.selected = true;
    state.topic.id = payload;
  },
  // UPDATE PAGE / STORYLINE MUTATIONS
  [types.PAGE_UPDATE] (state, payload) {
    state.page = payload;
  },
  [types.TRANSITIONS_UPDATE] (state, payload) {
    state.pageTransitionStates = payload;
  },
  [types.TOPIC_STATE_UPDATE] (state, payload) {
    state.topicState = payload;
  },
  [types.PAGE_COMPONENTS_UPDATE] (state, payload) {
    state.pageComponents = payload;
  },
  // DIALOG MUTATIONS
  [types.DIALOG_UPDATE] (state, payload) {
    state.dialogNotifications = payload;
  },
  // NOTEBOOK MUTATIONS
  [types.UPDATE_NOTEBOOK] (state, payload) {
    state.notebook.list = payload;
  },
  [types.UPDATE_PERSONAL_NOTE_LIST] (state, payload) {
    state.notebook.list = state.notebook.list.map( entry => {
      if( entry.id == payload.id ){
        entry.personalNotes = payload.serverData;
      }
      return entry;
    })
  },
  // MAIL MUTATIONS
  [types.MAIL_LIST_UPDATE] (state, payload) {
    // Update from mailList
    state.mails = payload;
  },
  [types.MAIL_NOTIFICATION_UPDATE] (state, payload) {
    state.mailNotifications = payload;
  },
  [types.SAVE_MAIL_REPLY] (state, payload) {
    state.mails = state.mails.map( item => {
      if( item.mail.id == payload.id ){
        item.mailReplyList = { text: payload.text };
      }
      return item;
    });
  },
});
