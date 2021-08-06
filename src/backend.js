export { sub_AP_method_test };

// This should query a webserver using Patrick's tool when this website is in production.
// You can delete everything inside the function's braces when the webserver is set up.
function sub_AP_method_test(file1, file2) {
    return [
        sample_is_defined,
        sample_duplicated
    ]
}

// delete everything below this comment when this code goes into production.
let sample_is_defined = {
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

let sample_duplicated = {
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