import { h, Component} from 'preact';

export { GroupForm };

class GroupForm extends Component {
    render() {
        const groupItems = this.props.groups.map((entry) =>
            <div class="form-group mb-2">
                <label class="form-switch">
                    <input
                        type="checkbox"
                        checked={entry[1]}
                        onChange={() => this.props.handleGroup(entry[0])}
                    />
                    <i class="form-icon"></i> {entry[0]}
                </label>
            </div>
        );
        return (
            <div class="column is-narrow px-1 mr-6" style="text-align: left">
                <h3 style="text-align: center" class="mb-5 is-size-4">Groups</h3>
                {groupItems}
            </div>
        );
    }
}