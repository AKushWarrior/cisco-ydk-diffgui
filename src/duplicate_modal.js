import { h, Component } from 'preact';

export { DuplicateModal };

class DuplicateModal extends Component {
    constructor() {
        super();
        this.state = { is_active: false };
    }

    toggleActive() {
        this.setState({ is_active: !this.state.is_active });
    }

    render() {
        const duplicated = Object.entries(this.props.duplicated);
        console.log(duplicated);
        const duplicated_blocks = duplicated.map(
            (entry) => 
            <div>
                <p class="is-size-5 mt-2">{entry[0]}</p>
                {entry[1].map(
                    (group) =>
                    <p class="is-size-7 ml-2 my-1">{group}</p>
                )}
            </div>
        )

        return !this.state.is_active
            ? <button class="button is-warning mt-4" onClick={this.toggleActive.bind(this)}>
                Duplicated Methods
            </button>
            : <div class={"modal is-active"}>
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head has-background-warning">
                        <p class="modal-card-title">Duplicated Methods</p>
                        <button class="delete" aria-label="close" onClick={this.toggleActive.bind(this)}></button>
                    </header>
                    <section class="modal-card-body">
                        <p> The following methods could not be attributed to a specific technology group, because
                            multiple technology groups define a method with that name. A method with the given name 
                            is present in your Sub-AP, but the version called could be the one defined in any of 
                            the listed technology groups. 
                            
                            Since it is impossible (or at least, beyond our current resources) to determine the 
                            technology group these methods belong to programmatically, you will have to manually
                            investigate which group each method belongs to in your Sub-AP.
                        </p>
                        {duplicated_blocks}
                    </section>
                </div>
            </div>;
    }
}