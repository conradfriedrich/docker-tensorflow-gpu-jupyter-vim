require([
  'nbextensions/vim_binding/vim_binding',
  'base/js/namespace',
], function(vim_binding, ns) {
  // Add post callback
  vim_binding.on_ready_callbacks.push(function(){
    var km = ns.keyboard_manager;
    // Indicate the key combination to run the commands
    km.edit_shortcuts.add_shortcut('ctrl-[', CodeMirror.prototype.leaveInsertMode, true);
    km.edit_shortcuts.add_shortcut('shift-ctrl-[', CodeMirror.prototype.leaveNormalMode, true);

    // Update help
    km.edit_shortcuts.events.trigger('rebuild.QuickHelp');
  });
});
