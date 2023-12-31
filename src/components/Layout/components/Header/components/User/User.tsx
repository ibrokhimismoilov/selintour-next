import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { LogoutOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";

import classes from "./User.module.scss";

const User = () => {
	const items: MenuProps["items"] = [
		{
			key: "1",
			icon: <SmileOutlined />,
			label: (
				<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
					1st menu item
				</a>
			)
		},
		{
			type: "divider"
		},
		{
			key: "2",
			danger: true,
			icon: <LogoutOutlined />,
			label: "Danger item"
		}
	];

	return (
		<div className={classes.user}>
			<Dropdown menu={{ items }} placement="bottomRight">
				<Space className="pointer">
					<span>Admin</span>
					<div className={classes.icon}>
						<UserOutlined />
					</div>
				</Space>
			</Dropdown>
		</div>
	);
};

export default User;
