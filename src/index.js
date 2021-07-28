import { h, Component, render } from 'preact';

class App extends Component {
    constructor() {
        super();
        this.state = { groups: {}};

        this.is_defined = {
            "ACL": {
                "delete_ace": true,
                "set_acl": true,
                "set_acl_ace": true
            },
            "BGP": {
                "config_bgp_globals": true,
                "config_bgp_globals_vrf": true,
                "config_bgp_neighbor": true,
                "config_bgp_neighbor_group": true
            },
            "Bundles": {
                "get_bundle": true,
                "get_lc_slots": true,
                "set_bundle_interface": true,
                "set_bundle_interfaces": true
            },
            "DHCP": {
                "config_agent_interface_ipv4": true,
                "config_agent_interface_ipv6": true,
                "config_helperaddress_ipv4": true,
                "set_relay_helper_dhcpv6": true,
                "unset_dhcp_ipv4": true,
                "unset_dhcp_ipv6": true,
                "unset_relay_helper_dhcpv6": true,
                "get_dhcp_ipv4_relay_statistics": false,
                "get_v6_relay_binding_count": false
            },
            "EVPN": {
                "add_esi": true,
                "add_evi": true,
                "add_interface_convergence": true,
                "add_interface_hrw": true,
                "delete_evi": true,
                "delete_interface_hrw": true,
                "set_BVIIntf": true,
                "get_evpn_ethernet_segment_carving_detail": false,
                "get_evpn_ethernet_segment_interface_detail": false,
                "remove_evpn_loadbalancing": false
            },
            "Forwarding": {
                "config_cef_adjacency": true,
                "delete_vrf": true,
                "get_vrf_data": true
            },
            "L2": {
                "get_cfm_summary": true,
                "set_ethernet_cfm_domain_level": true,
                "set_ethernet_sla_profile": true,
                "set_interface_ethernet_cfm": true
            },
            "L2VPN": {
                "get_bridge_domain": true,
                "remove_bridge_group": true,
                "remove_l2vpn": true,
                "remove_xconnect_group": true,
                "set_bridge_group": true,
                "set_evpn_vpws": true,
                "set_flexiblexconnect": true,
                "set_xconnect": true,
                "unset_xconnect": true,
                "get_l2vpn_flexible_xconnect_service_detail": false
            },
            "Multicast": {
                "set_pim_config": true,
                "set_static_group": true,
                "set_acl_config": false
            },
            "PI Infra": {
                "delete_interface": true,
                "get_interface_accounting": true,
                "get_interfaces_brief": true,
                "get_process_info": true,
                "get_show_interfaces_summary": true,
                "set_bundle_id": true,
                "set_config": true,
                "set_l2_transport": true,
                "set_rewrite_ingress_tag_pop": true,
                "set_vlan_config": true,
                "unset_rewrite_ingress_tag_translate": true,
                "set_rewrite_ingress_tag_translate": false
            },
            "Platform": {
                "create_interfaces": true,
                "get_lc_locations": true,
                "get_rp_locations": true
            }
        }

        this.duplicated = {
            "add_bundle_interface": [
                "Bundles",
                "PI Infra"
            ],
            "add_interface": [
                "EVPN",
                "PI Infra"
            ],
            "add_source": [
                "EVPN",
                "PI Infra"
            ],
            "get_interface": [
                "ACL",
                "L2VPN",
                "MPLS TE",
                "Multicast",
                "PI Infra"
            ],
            "get_interfaces": [
                "PI Infra",
                "Platform"
            ],
            "remove_interface": [
                "EVPN",
                "MPLS LDP"
            ],
            "set_vrf": [
                "Forwarding",
                "PI Infra"
            ]
        }
    }

    componentDidMount() {

        let keys = Array.from(new Map(Object.entries(this.is_defined)).keys());
        keys.forEach((key, i) => this.state.groups[key] = true);
        console.log(this.state.groups);
        console.log(Object.entries(this.state.groups));

        this.setState({});
    }

    handleGroupToggle(id) {
        this.state.groups[id] = !this.state.groups[id];
        console.log(this.state.groups);
        this.setState({});
    }

    render() {
        const foundList = Object.entries(this.is_defined).filter((entry) => this.state.groups[entry[0]]);
        for (let i = 0; i < foundList.length; i++) {
            foundList[i][1] = Object.entries(foundList[i][1]).filter(entry => entry[1]);
        }

        const foundCards = foundList.map((entry) => <GroupDisplay name={entry[0]} content={entry[1]} is_found={true}/> );

        let notFoundList = Object.entries(this.is_defined).filter((entry) => this.state.groups[entry[0]]);
        for (let i = 0; i < notFoundList.length; i++) {
            notFoundList[i][1] = Object.entries(notFoundList[i][1]).filter(entry => !entry[1]);
        }
        notFoundList = notFoundList.filter((entry) => entry[1].length > 0);

        const notFoundCards = notFoundList.map((entry) => <GroupDisplay name={entry[0]} content={entry[1]} is_found={false}/>);

        return <div style="text-align: center;">
            <h1 style="text-align: center;" class="is-size-2">Netconf/Yang Method DiffGUI</h1>
            <div class="columns">
                <GroupForm groups={Object.entries(this.state.groups)} handleGroup={this.handleGroupToggle.bind(this)} />
                <div class="column px-1">
                    <h3 class="my-5 is-size-4">Found in YDK</h3>
                    {foundCards}
                </div>
                <div class="column px-1">
                    <h3 class="my-5 is-size-4">Not Found in YDK</h3>
                    {notFoundCards}
                </div>
            </div>
        </div>;
    }
}

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
                <h3 style="text-align: center" class="my-5 is-size-4">Groups</h3>
                {groupItems}
            </div>
        );
    }
}

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

render(<App />, document.body);