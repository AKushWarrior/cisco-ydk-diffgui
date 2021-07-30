import { h, Component} from 'preact';

export { GroupDisplay };

class GroupDisplay extends Component {
    render() {
        const group = this.props.name;
        const content = this.props.content;
        const is_found = this.props.is_found;
        const color = is_found ? " has-text-success" : "has-text-danger";

        const items = content.map((entry) => <p style="margin-top: 5px; margin-bottom: 0px">{entry}</p>);

        return (
            <div class="card mb-2">
                <div class="card-header">
                    <h5 class={"card-header-title my-0 " + color}>{group}</h5>
                </div>
                <div class="card-content is-size-7 py-3">
                    {items}
                </div>
            </div>
        );
    }
}