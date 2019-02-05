// ==UserScript==
// @name         3.Darker
// @namespace    infinitytec.github.io
// @version      1.1
// @description  Darker theme for 3.0. Distributed under the MIT license.
// @author       infinitytec
// @match        https://scratch.mit.edu/projects/*
// @grant        GM_addStyle
// @updateURL    https://github.com/infinitytec/3.Darker/raw/master/3darker.user.js
// ==/UserScript==

(function() {
    'use strict';
    //3.0 Theme Userscript Framework by infinitytec. Released under the MIT license.
    //Main UI bar, similar bars, and dropdown menu
    GM_addStyle(".menu-bar_main-menu_3wjWH, .modal_header_1h7ps, .menu-bar_account-info-group_MeJZP, .menu_menu_3k7QT {background: #202020;}");
    //Main background
    GM_addStyle(".gui_body-wrapper_-N0sA{background: #111111;}");
    //Scripting area background
    GM_addStyle(".blocklyMainBackground{fill: #202020  !important;}");
    //Right-click & pop-ups
    GM_addStyle(".context-menu_context-menu_2SJM-, .blocklyWidgetDiv .goog-menu, .Popover-body {background: #202020 !important; color: #bfbfbf !important; border: 1px solid #bfbfbf;} .goog-menuitem-content, .color-picker_row-header_173LQ {color: #bfbfbf;} /*Highlight*/ .blocklyWidgetDiv .goog-menuitem-highlight, .blocklyWidgetDiv .goog-menuitem-hover, .context-menu_menu-item_3cioN:hover {background-color:#3d4e72 !important;}");
    //Palette
    GM_addStyle(".blocklyFlyoutBackground {fill: #252525 !important;}");
    //Palette text
    GM_addStyle(".blocklyFlyoutLabelText{fill: #bfbfbf !important;}");
    //Toolbox
    GM_addStyle(".blocklyToolboxDiv, .scratchCategoryMenu {background: #252525; color: #bfbfbf;}");
    //Selected category
    GM_addStyle(".scratchCategoryMenuItem.categorySelected {background: #ffffff22;}");
    //Sprite and stage selection area
    GM_addStyle(".sprite-selector_sprite-selector_2KgCX, .stage-selector_stage-selector_3oWOr, .stage-selector_label_1MCfr, .stage-selector_count_2QK7D {background: #252525; color: #bfbfbf;}");
    GM_addStyle(".sprite-info_sprite-info_3EyZh, .stage-selector_header_2GVr1, .stage-selector_header-title_33xCt, .stage-selector_header-title_33xCt, .sprite-selector-item_sprite-selector-item_kQm-i:hover {background: #202020; color: #bfbfbf;}");
    //Palette Buttons
    GM_addStyle(".blocklyFlyoutButtonBackground {fill: #3d4e72 !important;}.blocklyFlyoutButtonBackground:hover, .blocklyFlyoutButton:hover {fill: #4d5e82 !important;}");
    GM_addStyle("blocklyFlyoutButton > text.blocklyText {fill: #bfbfbf!important;}");
    //Text fill of "Make A" buttons
    GM_addStyle(".blocklyFlyoutButton .blocklyText {fill: #bfbfbf !important;");
     //Backpack header
    GM_addStyle(".backpack_backpack-header_6ltCS {background: #202020; color: #bfbfbf;}");
     //Backpack
    GM_addStyle(".backpack_backpack-list-inner_10a2A {background: #202020;} .backpack_backpack-item_hwqzQ{background: #bfbfbf;}");
     //Paint & sound editor sidebar
    GM_addStyle(".selector_list-area_1Xbj_{background: #252525;} .selector_new-buttons_2qHDd::before {background: none;}");
     //Paint & sound editor main
    GM_addStyle(".asset-panel_wrapper_366X0{background: #202020; color: #bfbfbf;} .sound-editor_effect-button_2zuzT, .sound-editor_trim-button_lSENI {color: #bfbfbf;}");
    //Paint and sound editor buttons
    GM_addStyle("img.tool-select-base_tool-select-icon_tJ-rr, .sound-editor_trim-button_lSENI{filter: brightness(2);}");
    //Sprite costume selector text
    GM_addStyle(".selector_list-item_3N_u7, .sprite-selector-item_sprite-name_1PXjh, .sprite-selector-item_sprite-details_2UVpA {color: #bfbfbf;}");
    //Tabs
    GM_addStyle(".gui_tab_27Unf.gui_is-selected_sHAiu{background: #202020;color: #bfbfbf;}.gui_tab_27Unf{background: #202020;color: #bfbfbf;} .gui_tab_27Unf:hover{background: #252525;color: #bfbfbf;}");
    //New variable/list/custom block
    GM_addStyle(".prompt_body_18Z-I, .custom-procedures_body_SQBv6, div.custom-procedures_option-card_BtHt3 {background: #202020; color: #bfbfbf;} .custom-procedures_button-row_2jBu3 > button:nth-child(1), .prompt_button-row_3Wc5Z > button:nth-child(1),.prompt_button-row_3Wc5Z > button:nth-child(1) {background: #ff3a5b;}");
    //Fullscreen view
    GM_addStyle(".stage_stage-wrapper-overlay_fmZuD, .stage-header_stage-header-wrapper-overlay_5vfJa{background: black;} .stage_stage-overlay-content_ePv_6 {border: none;} ");
    //Library background
    GM_addStyle(".library_library-scroll-grid_1jyXm, .modal_modal-content_1h3ll.modal_full-screen_FA4cr {background:#202020; color: #bfbfbf;} ");
    //Library items & filter bar
    GM_addStyle(".library-item_library-item-extension_3xus9, .library-item_library-item_1DcMO, .library_filter-bar_1W0DW {background: #202020; .library-item_library-item-extension_3xus9 span, .library-item_featured-extension-metadata_3D8E8 {color: #bfbfbf !important;}");
    //Text input
    GM_addStyle("input[type=text], .input_input-form_1Y0wX, .prompt_variable-name-text-input_1iu8- {background: #252525; color: #bfbfbf !important;} input[type=text]:hover, input[type=text]:focus {background: #3f5076;}");
    //Buttons (inverted for dark theme)
    GM_addStyle(".blocklyZoom,  .stage-header_stage-button_hkl9B, .sound-editor_round-button_3NLcW, .sound-editor_button-group_SFPoV {filter: invert(100) hue-rotate(180deg);}");
})();
