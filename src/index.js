import { h, createRef, Component, render } from 'preact';
import { GroupForm } from './group_form';
import { GroupDisplay } from './group_display';
import { sub_AP_method_test } from './transcrypt/tool';

class App extends Component {
    constructor() {
        super();

        let is_defined = Object.entries({})

        let duplicated = Object.entries({})

        this.state = { groups: {}, file1: null, file2: null, is_defined: is_defined, duplicated: duplicated };

        this.fileInput = createRef();
        this.fileInput2 = createRef();
    }

    handleGroupToggle(id) {
        console.log(this.state.is_defined);
        this.state.groups[id] = !this.state.groups[id];
        this.setState({groups: this.state.groups});
    }

    async onFileInput1() {
        this.setState({ file1: this.fileInput.current.files[0] });
        if (this.state.file2 !== null) {
            await this.processFiles();
        }
    }

    async onFileInput2() {
        this.setState({ file2: this.fileInput2.current.files[0] });
        if (this.state.file1 !== null) {
            await this.processFiles();
        }
    }

    async processFiles() {
        let result = sub_AP_method_test(await this.state.file1.text(), await this.state.file2.text());
        this.state.is_defined = result[0];
        this.state.duplicated = result[1];
        let groupList = Object.keys(this.state.is_defined);
        for (let i = 0; i < groupList.length; i++) {
            this.state.groups[groupList[i]] = true;
        }
        this.setState({});
    }

    render() {
        let foundList = Object.entries(this.state.is_defined).filter((entry) => this.state.groups[entry[0]]);
        for (let i = 0; i < foundList.length; i++) {
            foundList[i][1] = Object.entries(foundList[i][1]).filter(entry => typeof entry[1] === "boolean" && entry[1]);
        }
        foundList = foundList.filter((entry) => entry[1].length > 0);
        const foundCards = foundList.map((entry) => <GroupDisplay name={entry[0]} content={entry[1]} is_found={true} />);

        let notFoundList = Object.entries(this.state.is_defined).filter((entry) => this.state.groups[entry[0]]);
        for (let i = 0; i < notFoundList.length; i++) {
            notFoundList[i][1] = Object.entries(notFoundList[i][1]).filter(entry => typeof entry[1] === "boolean" && (!entry[1]));
        }
        notFoundList = notFoundList.filter((entry) => entry[1].length > 0);
        const notFoundCards = notFoundList.map((entry) => <GroupDisplay name={entry[0]} content={entry[1]} is_found={false} />);

        return <div style="text-align: center;">
            <h1 style="text-align: center;" class="is-size-2">Netconf/Yang Method DiffGUI</h1>
            <div class="level is-centered is-justify-content-center">
                <div class={"file is-centered mt-4 mx-3" + (this.state.file1 == null ? "" : " is-link")}>
                    <label class="file-label">
                        <input class="file-input" type="file" accept=".py" name="resume" ref={this.fileInput} onInput={this.onFileInput1.bind(this)} />
                        <span class="file-cta">
                            <span class="file-label">
                                {this.state.file1 == null ? "Upload File 1" : this.state.file1.name}
                            </span>
                        </span>
                    </label>
                </div>
                <div class={"file is-centered mt-4 mx-3" + (this.state.file2 == null ? "" : " is-link")}>
                    <label class="file-label">
                        <input class="file-input" type="file" accept=".py" name="resume" ref={this.fileInput2} onInput={this.onFileInput2.bind(this)} />
                        <span class="file-cta">
                            <span class="file-label">
                                {this.state.file2 == null ? "Upload File 2" : this.state.file2.name}
                            </span>
                        </span>
                    </label>
                </div>
            </div>
            <div class="columns">
                <GroupForm groups={Object.entries(this.state.groups)} handleGroup={this.handleGroupToggle.bind(this)} />
                <div class="column px-1">
                    <h3 class="mb-5 is-size-4">Found in YDK</h3>
                    {foundCards}
                </div>
                <div class="column px-1">
                    <h3 class="mb-5 is-size-4">Not Found in YDK</h3>
                    {notFoundCards}
                </div>
            </div>
        </div>;
    }
}

render(<App />, document.body);