import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StoreIcon from '@mui/icons-material/Store';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';

function Header() {
	return <div className="header">
		<div className="header_left">
			<img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
				 alt=""/>
			<div className="header_input">
				<SearchIcon />
				<input placeholder="Search Facebook" type="text" />
			</div>
		</div>

		<div className="header_middle">
			<div className="header_option header_option_active">
			<HomeIcon fontSize="large"/>
			</div>
			<div className="header_option">
			<FlagIcon fontSize="large"/>
			</div>
			<div className="header_option">
			<SubscriptionsIcon fontSize="large"/>
			</div>
			<div className="header_option">
			<StoreIcon fontSize="large"/>
			</div>
			<div className="header_option">
			<SupervisedUserCircleIcon fontSize="large"/>
			</div>
		</div>
		<div className="header_right">
			<div className="header_option">
			<Avatar src="https://image.pngaaa.com/306/81306-middle.png"/>
			<h4>Anoynomous Coder</h4>
			</div>
			
		<IconButton>
		<AddIcon />
		</IconButton>
		<IconButton>
		<ForumIcon />
		</IconButton>
		<IconButton>
		<NotificationsActiveIcon />
		</IconButton>
		<IconButton>
		<ExpandMoreIcon />
		</IconButton>


		</div>
 
	 </div>;

		
}

export default Header; 