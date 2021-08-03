sample_is_defined = {
    "ACL": {
        "delete_ace": True,
        "set_acl": True,
        "set_acl_ace": True
    },
    "BGP": {
        "config_bgp_globals": True,
        "config_bgp_globals_vrf": True,
        "config_bgp_neighbor": True,
        "config_bgp_neighbor_group": True
    },
    "Bundles": {
        "get_bundle": True,
        "get_lc_slots": True,
        "set_bundle_interface": True,
        "set_bundle_interfaces": True
    },
    "DHCP": {
        "config_agent_interface_ipv4": True,
        "config_agent_interface_ipv6": True,
        "config_helperaddress_ipv4": True,
        "set_relay_helper_dhcpv6": True,
        "unset_dhcp_ipv4": True,
        "unset_dhcp_ipv6": True,
        "unset_relay_helper_dhcpv6": True,
        "get_dhcp_ipv4_relay_statistics": False,
        "get_v6_relay_binding_count": False
    },
    "EVPN": {
        "add_esi": True,
        "add_evi": True,
        "add_interface_convergence": True,
        "add_interface_hrw": True,
        "delete_evi": True,
        "delete_interface_hrw": True,
        "set_BVIIntf": True,
        "get_evpn_ethernet_segment_carving_detail": False,
        "get_evpn_ethernet_segment_interface_detail": False,
        "remove_evpn_loadbalancing": False
    },
    "Forwarding": {
        "config_cef_adjacency": True,
        "delete_vrf": True,
        "get_vrf_data": True
    },
    "L2": {
        "get_cfm_summary": True,
        "set_ethernet_cfm_domain_level": True,
        "set_ethernet_sla_profile": True,
        "set_interface_ethernet_cfm": True
    },
    "L2VPN": {
        "get_bridge_domain": True,
        "remove_bridge_group": True,
        "remove_l2vpn": True,
        "remove_xconnect_group": True,
        "set_bridge_group": True,
        "set_evpn_vpws": True,
        "set_flexiblexconnect": True,
        "set_xconnect": True,
        "unset_xconnect": True,
        "get_l2vpn_flexible_xconnect_service_detail": False
    },
    "Multicast": {
        "set_pim_config": True,
        "set_static_group": True,
        "set_acl_config": False
    },
    "PI Infra": {
        "delete_interface": True,
        "get_interface_accounting": True,
        "get_interfaces_brief": True,
        "get_process_info": True,
        "get_show_interfaces_summary": True,
        "set_bundle_id": True,
        "set_config": True,
        "set_l2_transport": True,
        "set_rewrite_ingress_tag_pop": True,
        "set_vlan_config": True,
        "unset_rewrite_ingress_tag_translate": True,
        "set_rewrite_ingress_tag_translate": False
    },
    "Platform": {
        "create_interfaces": True,
        "get_lc_locations": True,
        "get_rp_locations": True
    }
}

sample_duplicated = {
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