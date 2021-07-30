import { h, createRef, Component, render } from 'preact';
import { GroupForm } from './group_form';
import { GroupDisplay } from './group_display';

class App extends Component {
    constructor() {
        super();

        let is_defined = {
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

        let duplicated = {
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

        this.state = { groups: {}, file1: null, file2: null, is_defined: is_defined, duplicated: duplicated };

        this.fileInput = createRef();
        this.fileInput2 = createRef();
    }

    componentDidMount() {
        let keys = Array.from(new Map(Object.entries(this.state.is_defined)).keys());
        keys.forEach((key, i) => this.state.groups[key] = true);
        this.setState({});
    }

    handleGroupToggle(id) {
        this.state.groups[id] = !this.state.groups[id];
        this.setState({});
    }

    onFileInput1() {
        this.setState({ file1: this.fileInput.current.files[0] });
    }

    onFileInput2() {
        this.setState({ file2: this.fileInput2.current.files[0] });
    }

    render() {
        let foundList = Object.entries(this.state.is_defined).filter((entry) => this.state.groups[entry[0]]);
        for (let i = 0; i < foundList.length; i++) {
            foundList[i][1] = Object.entries(foundList[i][1]).filter(entry => entry[1]);
        }
        foundList = foundList.filter((entry) => entry[1].length > 0);
        const foundCards = foundList.map((entry) => <GroupDisplay name={entry[0]} content={entry[1]} is_found={true} />);

        let notFoundList = Object.entries(this.state.is_defined).filter((entry) => this.state.groups[entry[0]]);
        for (let i = 0; i < notFoundList.length; i++) {
            notFoundList[i][1] = Object.entries(notFoundList[i][1]).filter(entry => !entry[1]);
        }
        notFoundList = notFoundList.filter((entry) => entry[1].length > 0);
        const notFoundCards = notFoundList.map((entry) => <GroupDisplay name={entry[0]} content={entry[1]} is_found={false} />);

        return <div style="text-align: center;">
            <h1 style="text-align: center;" class="is-size-2">Netconf/Yang Method DiffGUI</h1>
            <div class="level is-centered is-justify-content-center">
                <div class={"file is-centered mt-4 mx-3" + (this.state.file1 == null ? "" : " is-link")}>
                    <label class="file-label">
                        <input class="file-input" type="file" name="resume" ref={this.fileInput} onInput={this.onFileInput1.bind(this)} />
                        <span class="file-cta">
                            <span class="file-label">
                                {this.state.file1 == null ? "Upload File 1" : this.state.file1.name}
                            </span>
                        </span>
                    </label>
                </div>
                <div class={"file is-centered mt-4 mx-3" + (this.state.file2 == null ? "" : " is-link")}>
                    <label class="file-label">
                        <input class="file-input" type="file" name="resume" ref={this.fileInput2} onInput={this.onFileInput2.bind(this)} />
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