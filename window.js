#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Window");
window.connect("destroy", Gtk.main_quit);

window.show_all();

Gtk.main();
