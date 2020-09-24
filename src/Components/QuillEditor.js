import React from 'react';

import Quill from 'quill/core';
import Toolbar from 'quill/modules/toolbar';
import Snow from 'quill/themes/snow'; //snow works, but need to import and register formats, and replace icons...

import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import Header from 'quill/formats/header';
import Underline from 'quill/formats/underline';
import Link from 'quill/formats/link';
import List, { ListItem } from 'quill/formats/list';
import Icons from 'quill/ui/icons';

let quillCopy = ""
export default class QuillEditor extends React.Component {

    componentDidMount() {

        Quill.register({
            'modules/toolbar': Toolbar,
            'themes/snow': Snow,
            'formats/bold': Bold,
            'formats/italic': Italic,
            'formats/header': Header,
            'formats/underline': Underline,
            'formats/link': Link,
            'formats/list': List,
            'formats/list/item': ListItem,
            'ui/icons': Icons
        });

        var icons = Quill.import('ui/icons');
        icons['bold'] = `<svg viewbox="0 0 18 18">
                <path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"></path>
                <path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"></path>
                </svg>`;
        icons['italic'] = `<svg viewbox="0 0 18 18">
                <line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line>
                <line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line>
                <line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line>
                </svg>`;
        icons['underline'] = `<svg viewbox="0 0 18 18">
                <path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"></path>
                <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"></rect>
            </svg>`;
        // // icons['link'] = 'link';
        // // icons['clean'] = 'clean';

        console.log("icons", Icons.bold)


        var toolbarOptions = ['bold', 'italic', 'underline'];
        
        let quill = new Quill('#editor', {
            theme: 'snow', //this needs to come after the above, which registers Snow...
            placeholder: "Write something awesome...",
            modules: {
                toolbar: toolbarOptions
            },
        });

        quill.on('text-change', function (delta, oldDelta, source) {
            console.log(quill.root.innerHTML)
            if (source === 'user') {
                this.props.handleNotepadChange(quillCopy.root.innerHTML)
            }
        });

        quillCopy = quill
        
    } //componentDidMount


    changeHelper = () => {
        this.props.handleNotepadChange(quillCopy.root.innerHTML)
    }


    render() {
        return (
            <div>
                <div id="QuillEditor-container" className="quill-editor">
                    {/* <!-- Create the editor container --> */}
                    <div id="toolbar"></div>
                    <div id="editor">
                        <p></p>
                    </div>
                    <button onClick={this.clearEditor}>Get Inner HTML</button>
                </div>
            </div>
        )
    }
}