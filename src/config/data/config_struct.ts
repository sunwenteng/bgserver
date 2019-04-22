//********** header **********//
import * as fs from 'fs';

//********** body **********//
// activitydb
export class activityDB {
	ID:any;				//ID
	Text_Name:any;		//Text_Name
	Text_Desc:any;		//Text_Desc
	Type:any;			//Type
	TypeParam:any;		//TypeParam
	enterIcon:any;		//活动入口
	Text_enterName:any;	//活动名称
	enterEff:any;		//活动入口特效
	subType:any;		//
	TimeType:any;		//TimeType
	Time:any;			//Time
	RwdTime:any;		//1~5
	Close:any;			//是否关闭
	IconName:any;		//IconName
	strArgs:any;		//背景描述+描述文字
	loopDays:any;		//循环周期
	Switch:any;			//可见条件
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.Text_Desc = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Desc] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Desc]).Name);
		this.Type = data[idx.Type];
		this.TypeParam = data[idx.TypeParam];
		this.enterIcon = data[idx.enterIcon];
		this.Text_enterName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_enterName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_enterName]).Name);
		this.enterEff = data[idx.enterEff];
		this.subType = data[idx.subType];
		this.TimeType = data[idx.TimeType];
		this.Time = data[idx.Time];
		this.RwdTime = data[idx.RwdTime];
		this.Close = data[idx.Close];
		this.IconName = data[idx.IconName];
		this.strArgs = data[idx.strArgs];
		this.loopDays = data[idx.loopDays];
		this.Switch = data[idx.Switch];
	}
}
export class activityDBMgr {
    activityDBConfig : {[ID:number]: activityDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.activityDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.activityDBConfig[data[i][idx.ID]] = new activityDB(data[i], idx);
        }
    }
    public get(ID:number):activityDB {
        return this.activityDBConfig[ID];
    }
    public all():{[ID:number]: activityDB} {
        return this.activityDBConfig;
    }
}

// activity_rankdb
export class activity_rankDB {
	ID:any;				//ID
	ActId:any;			//ActId
	Rank:any;			//Rank
	JSON_KingIds:any;	//JSON_KingIds
	JSON_Awards:any;	//JSON_Awards
	JSON_Awards1:any;	//JSON_Awards1
	IconName:any;		//IconName
	Text_Desc:any;		//Text_Desc
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.ActId = data[idx.ActId];
		this.Rank = data[idx.Rank];
		this.JSON_KingIds = data[idx.JSON_KingIds];
		this.JSON_Awards = data[idx.JSON_Awards];
		this.JSON_Awards1 = data[idx.JSON_Awards1];
		this.IconName = data[idx.IconName];
		this.Text_Desc = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Desc] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Desc]).Name);
	}
}
export class activity_rankDBMgr {
    activity_rankDBConfig : {[ID:number]: activity_rankDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.activity_rankDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.activity_rankDBConfig[data[i][idx.ID]] = new activity_rankDB(data[i], idx);
        }
    }
    public get(ID:number):activity_rankDB {
        return this.activity_rankDBConfig[ID];
    }
    public all():{[ID:number]: activity_rankDB} {
        return this.activity_rankDBConfig;
    }
}

// activity_taskdb
export class activity_taskDB {
	ID:any;				//ID
	ActId:any;			//ActId
	JSON_Target:any;	//JSON_Target
	JSON_Award:any;		//JSON_Award
	NewDayReset:any;	//每天重置
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.ActId = data[idx.ActId];
		this.JSON_Target = data[idx.JSON_Target];
		this.JSON_Award = data[idx.JSON_Award];
		this.NewDayReset = data[idx.NewDayReset];
	}
}
export class activity_taskDBMgr {
    activity_taskDBConfig : {[ID:number]: activity_taskDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.activity_taskDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.activity_taskDBConfig[data[i][idx.ID]] = new activity_taskDB(data[i], idx);
        }
    }
    public get(ID:number):activity_taskDB {
        return this.activity_taskDBConfig[ID];
    }
    public all():{[ID:number]: activity_taskDB} {
        return this.activity_taskDBConfig;
    }
}

// approvedb
export class approveDB {
	ID:any;					//ID
	Text_ApproveInfo:any;	//Text_ApproveInfo
	ApproveType:any;		//ApproveType
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Text_ApproveInfo = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_ApproveInfo] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_ApproveInfo]).Name);
		this.ApproveType = data[idx.ApproveType];
	}
}
export class approveDBMgr {
    approveDBConfig : {[ID:number]: approveDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.approveDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.approveDBConfig[data[i][idx.ID]] = new approveDB(data[i], idx);
        }
    }
    public get(ID:number):approveDB {
        return this.approveDBConfig[ID];
    }
    public all():{[ID:number]: approveDB} {
        return this.approveDBConfig;
    }
}

// approve_resultdb
export class approve_resultDB {
	ID:any;						//ID
	ApproveId:any;				//ApproveId
	ApproveResult:any;			//ApproveResult
	Text_ApproveResultInfo:any;	//Text_ApproveResultInfo
	OfficeLV:any;				//OfficeLV
	Reward:any;					//Reward
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.ApproveId = data[idx.ApproveId];
		this.ApproveResult = data[idx.ApproveResult];
		this.Text_ApproveResultInfo = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_ApproveResultInfo] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_ApproveResultInfo]).Name);
		this.OfficeLV = data[idx.OfficeLV];
		this.Reward = data[idx.Reward];
	}
}
export class approve_resultDBMgr {
    approve_resultDBConfig : {[ID:number]: approve_resultDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.approve_resultDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.approve_resultDBConfig[data[i][idx.ID]] = new approve_resultDB(data[i], idx);
        }
    }
    public get(ID:number):approve_resultDB {
        return this.approve_resultDBConfig[ID];
    }
    public all():{[ID:number]: approve_resultDB} {
        return this.approve_resultDBConfig;
    }
}

// approve_typedb
export class approve_typeDB {
	ID:any;					//ID
	Text_ApproveName:any;	//Text_ApproveName
	ApproveType:any;		//ApproveType
	BgPath:any;				//BgPath
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Text_ApproveName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_ApproveName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_ApproveName]).Name);
		this.ApproveType = data[idx.ApproveType];
		this.BgPath = data[idx.BgPath];
	}
}
export class approve_typeDBMgr {
    approve_typeDBConfig : {[ID:number]: approve_typeDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.approve_typeDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.approve_typeDBConfig[data[i][idx.ID]] = new approve_typeDB(data[i], idx);
        }
    }
    public get(ID:number):approve_typeDB {
        return this.approve_typeDBConfig[ID];
    }
    public all():{[ID:number]: approve_typeDB} {
        return this.approve_typeDBConfig;
    }
}

// banquet_exchangedb
export class banquet_exchangeDB {
	ID:any;			//ID
	Consume:any;	//Consume
	ExchangeId:any;	//ExchangeId
	Rate:any;		//Rate
	Reward:any;		//Reward
	BuyLimit:any;	//BuyLimit
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Consume = data[idx.Consume];
		this.ExchangeId = data[idx.ExchangeId];
		this.Rate = data[idx.Rate];
		this.Reward = data[idx.Reward];
		this.BuyLimit = data[idx.BuyLimit];
	}
}
export class banquet_exchangeDBMgr {
    banquet_exchangeDBConfig : {[ID:number]: banquet_exchangeDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.banquet_exchangeDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.banquet_exchangeDBConfig[data[i][idx.ID]] = new banquet_exchangeDB(data[i], idx);
        }
    }
    public get(ID:number):banquet_exchangeDB {
        return this.banquet_exchangeDBConfig[ID];
    }
    public all():{[ID:number]: banquet_exchangeDB} {
        return this.banquet_exchangeDBConfig;
    }
}

// banquet_joindb
export class banquet_joinDB {
	ID:any;					//ID
	BanquetOwnerReward:any;	//BanquetOwnerReward
	BanquetScore:any;		//BanquetScore
	Consume:any;			//Consume
	JoinId:any;				//JoinId
	Text_Name:any;			//Text_Name
	JSON_Reward:any;		//JSON_Reward
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BanquetOwnerReward = data[idx.BanquetOwnerReward];
		this.BanquetScore = data[idx.BanquetScore];
		this.Consume = data[idx.Consume];
		this.JoinId = data[idx.JoinId];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.JSON_Reward = data[idx.JSON_Reward];
	}
}
export class banquet_joinDBMgr {
    banquet_joinDBConfig : {[ID:number]: banquet_joinDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.banquet_joinDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.banquet_joinDBConfig[data[i][idx.ID]] = new banquet_joinDB(data[i], idx);
        }
    }
    public get(ID:number):banquet_joinDB {
        return this.banquet_joinDBConfig[ID];
    }
    public all():{[ID:number]: banquet_joinDB} {
        return this.banquet_joinDBConfig;
    }
}

// banquet_typedb
export class banquet_typeDB {
	ID:any;					//ID
	BanquetTable:any;		//BanquetTable
	Consume:any;			//Consume
	DiningBg:any;			//DiningBg
	JSON_DiningChair:any;	//JSON_DiningChair
	DiningTable:any;		//DiningTable
	ExpiredTime:any;		//ExpiredTime
	InDining:any;			//InDining
	Text_Name:any;			//Text_Name
	SeatCount:any;			//SeatCount
	Trouble:any;			//Trouble
	Type:any;				//Type
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BanquetTable = data[idx.BanquetTable];
		this.Consume = data[idx.Consume];
		this.DiningBg = data[idx.DiningBg];
		this.JSON_DiningChair = data[idx.JSON_DiningChair];
		this.DiningTable = data[idx.DiningTable];
		this.ExpiredTime = data[idx.ExpiredTime];
		this.InDining = data[idx.InDining];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.SeatCount = data[idx.SeatCount];
		this.Trouble = data[idx.Trouble];
		this.Type = data[idx.Type];
	}
}
export class banquet_typeDBMgr {
    banquet_typeDBConfig : {[ID:number]: banquet_typeDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.banquet_typeDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.banquet_typeDBConfig[data[i][idx.ID]] = new banquet_typeDB(data[i], idx);
        }
    }
    public get(ID:number):banquet_typeDB {
        return this.banquet_typeDBConfig[ID];
    }
    public all():{[ID:number]: banquet_typeDB} {
        return this.banquet_typeDBConfig;
    }
}

// beautydb
export class beautyDB {
	ID:any;					//ID
	Text_Name:any;			//Text_Name
	BeautyHead:any;			//BeautyHead
	BeautyVoice:any;		//BeautyVoice
	Body1Path:any;			//Body1Path
	Body1Sk:any;			//Body1Sk
	Body2Path:any;			//Body2Path
	Body2Sk:any;			//Body2Sk
	CharmValue:any;			//CharmValue
	Text_Desc:any;			//Text_Desc
	ExploreAddend:any;		//ExploreAddend
	ExploreMax:any;			//ExploreMax
	IconPath:any;			//IconPath
	Text_Identify:any;		//Text_Identify
	LoveValue:any;			//LoveValue
	Place:any;				//Place
	JSON_UnLockFormat:any;	//JSON_UnLockFormat
	Text_Unlock:any;		//Text_Unlock
	DialogId:any;			//DialogId
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.BeautyHead = data[idx.BeautyHead];
		this.BeautyVoice = data[idx.BeautyVoice];
		this.Body1Path = data[idx.Body1Path];
		this.Body1Sk = data[idx.Body1Sk];
		this.Body2Path = data[idx.Body2Path];
		this.Body2Sk = data[idx.Body2Sk];
		this.CharmValue = data[idx.CharmValue];
		this.Text_Desc = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Desc] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Desc]).Name);
		this.ExploreAddend = data[idx.ExploreAddend];
		this.ExploreMax = data[idx.ExploreMax];
		this.IconPath = data[idx.IconPath];
		this.Text_Identify = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Identify] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Identify]).Name);
		this.LoveValue = data[idx.LoveValue];
		this.Place = data[idx.Place];
		this.JSON_UnLockFormat = data[idx.JSON_UnLockFormat];
		this.Text_Unlock = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Unlock] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Unlock]).Name);
		this.DialogId = data[idx.DialogId];
	}
}
export class beautyDBMgr {
    beautyDBConfig : {[ID:number]: beautyDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.beautyDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.beautyDBConfig[data[i][idx.ID]] = new beautyDB(data[i], idx);
        }
    }
    public get(ID:number):beautyDB {
        return this.beautyDBConfig[ID];
    }
    public all():{[ID:number]: beautyDB} {
        return this.beautyDBConfig;
    }
}

// beauty_dialogdb
export class beauty_dialogDB {
	ID:any;				//ID
	JSON_Dialog:any;	//JSON_Dialog
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.JSON_Dialog = data[idx.JSON_Dialog];
	}
}
export class beauty_dialogDBMgr {
    beauty_dialogDBConfig : {[ID:number]: beauty_dialogDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.beauty_dialogDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.beauty_dialogDBConfig[data[i][idx.ID]] = new beauty_dialogDB(data[i], idx);
        }
    }
    public get(ID:number):beauty_dialogDB {
        return this.beauty_dialogDBConfig[ID];
    }
    public all():{[ID:number]: beauty_dialogDB} {
        return this.beauty_dialogDBConfig;
    }
}

// beauty_skilldb
export class beauty_skillDB {
	ID:any;				//ID
	BeautyId:any;		//BeautyId
	JSON_Effect:any;	//JSON_Effect
	Hero:any;			//Hero
	LoveValue:any;		//LoveValue
	MaxLv:any;			//MaxLv
	Text_Name:any;		//Text_Name
	SkillType:any;		//SkillType
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BeautyId = data[idx.BeautyId];
		this.JSON_Effect = data[idx.JSON_Effect];
		this.Hero = data[idx.Hero];
		this.LoveValue = data[idx.LoveValue];
		this.MaxLv = data[idx.MaxLv];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.SkillType = data[idx.SkillType];
	}
}
export class beauty_skillDBMgr {
    beauty_skillDBConfig : {[ID:number]: beauty_skillDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.beauty_skillDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.beauty_skillDBConfig[data[i][idx.ID]] = new beauty_skillDB(data[i], idx);
        }
    }
    public get(ID:number):beauty_skillDB {
        return this.beauty_skillDBConfig[ID];
    }
    public all():{[ID:number]: beauty_skillDB} {
        return this.beauty_skillDBConfig;
    }
}

// beauty_skill_updb
export class beauty_skill_upDB {
	ID:any;			//ID
	Exp:any;		//Exp
	SkillLv:any;	//SkillLv
	SkillType:any;	//SkillType
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Exp = data[idx.Exp];
		this.SkillLv = data[idx.SkillLv];
		this.SkillType = data[idx.SkillType];
	}
}
export class beauty_skill_upDBMgr {
    beauty_skill_upDBConfig : {[ID:number]: beauty_skill_upDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.beauty_skill_upDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.beauty_skill_upDBConfig[data[i][idx.ID]] = new beauty_skill_upDB(data[i], idx);
        }
    }
    public get(ID:number):beauty_skill_upDB {
        return this.beauty_skill_upDBConfig[ID];
    }
    public all():{[ID:number]: beauty_skill_upDB} {
        return this.beauty_skill_upDBConfig;
    }
}

// beauty_titledb
export class beauty_titleDB {
	ID:any;						//ID
	BeautyCntLimit:any;			//BeautyCntLimit
	IsShowPicture:any;			//IsShowPicture
	Lv:any;						//Lv
	Text_Name:any;				//Text_Name
	PictureType:any;			//PictureType
	TitleEffect:any;			//TitleEffect
	TitleRequireCharm:any;		//TitleRequireCharm
	TitleRequireIntimacy:any;	//TitleRequireIntimacy
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BeautyCntLimit = data[idx.BeautyCntLimit];
		this.IsShowPicture = data[idx.IsShowPicture];
		this.Lv = data[idx.Lv];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.PictureType = data[idx.PictureType];
		this.TitleEffect = data[idx.TitleEffect];
		this.TitleRequireCharm = data[idx.TitleRequireCharm];
		this.TitleRequireIntimacy = data[idx.TitleRequireIntimacy];
	}
}
export class beauty_titleDBMgr {
    beauty_titleDBConfig : {[ID:number]: beauty_titleDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.beauty_titleDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.beauty_titleDBConfig[data[i][idx.ID]] = new beauty_titleDB(data[i], idx);
        }
    }
    public get(ID:number):beauty_titleDB {
        return this.beauty_titleDBConfig[ID];
    }
    public all():{[ID:number]: beauty_titleDB} {
        return this.beauty_titleDBConfig;
    }
}

// bookdb
export class bookDB {
	ID:any;				//ID
	Text_BookName:any;	//Text_BookName
	Star:any;			//星数
	Aptitude:any;		//基础数值
	Attribute:any;		//属性
	Text_BookDesc:any;	//Text_BookDesc
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Text_BookName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_BookName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_BookName]).Name);
		this.Star = data[idx.Star];
		this.Aptitude = data[idx.Aptitude];
		this.Attribute = data[idx.Attribute];
		this.Text_BookDesc = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_BookDesc] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_BookDesc]).Name);
	}
}
export class bookDBMgr {
    bookDBConfig : {[ID:number]: bookDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.bookDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.bookDBConfig[data[i][idx.ID]] = new bookDB(data[i], idx);
        }
    }
    public get(ID:number):bookDB {
        return this.bookDBConfig[ID];
    }
    public all():{[ID:number]: bookDB} {
        return this.bookDBConfig;
    }
}

// book_star_updb
export class book_star_upDB {
	ID:any;			//ID
	BookStar:any;	//BookStar
	NeedExp:any;	//NeedExp
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BookStar = data[idx.BookStar];
		this.NeedExp = data[idx.NeedExp];
	}
}
export class book_star_upDBMgr {
    book_star_upDBConfig : {[ID:number]: book_star_upDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.book_star_upDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.book_star_upDBConfig[data[i][idx.ID]] = new book_star_upDB(data[i], idx);
        }
    }
    public get(ID:number):book_star_upDB {
        return this.book_star_upDBConfig[ID];
    }
    public all():{[ID:number]: book_star_upDB} {
        return this.book_star_upDBConfig;
    }
}

// btn_effectdb
export class btn_effectDB {
	ID:any;		//ID
	Eff:any;	//Eff
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Eff = data[idx.Eff];
	}
}
export class btn_effectDBMgr {
    btn_effectDBConfig : {[ID:number]: btn_effectDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.btn_effectDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.btn_effectDBConfig[data[i][idx.ID]] = new btn_effectDB(data[i], idx);
        }
    }
    public get(ID:number):btn_effectDB {
        return this.btn_effectDBConfig[ID];
    }
    public all():{[ID:number]: btn_effectDB} {
        return this.btn_effectDBConfig;
    }
}

// cabinetdb
export class cabinetDB {
	ID:any;			//ID
	AffairLv:any;	//AffairLv
	Consume:any;	//Consume
	Text_Intro:any;	//Text_Intro
	Text_Name:any;	//Text_Name
	NeedAttr:any;	//NeedAttr
	Text_Outro:any;	//Text_Outro
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.AffairLv = data[idx.AffairLv];
		this.Consume = data[idx.Consume];
		this.Text_Intro = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Intro] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Intro]).Name);
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.NeedAttr = data[idx.NeedAttr];
		this.Text_Outro = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Outro] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Outro]).Name);
	}
}
export class cabinetDBMgr {
    cabinetDBConfig : {[ID:number]: cabinetDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.cabinetDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.cabinetDBConfig[data[i][idx.ID]] = new cabinetDB(data[i], idx);
        }
    }
    public get(ID:number):cabinetDB {
        return this.cabinetDBConfig[ID];
    }
    public all():{[ID:number]: cabinetDB} {
        return this.cabinetDBConfig;
    }
}

// cabinet_rewarddb
export class cabinet_rewardDB {
	ID:any;			//ID
	AffairLv:any;	//AffairLv
	Rank:any;		//Rank
	RewardId:any;	//RewardId
	BookExp:any;	//BookExp
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.AffairLv = data[idx.AffairLv];
		this.Rank = data[idx.Rank];
		this.RewardId = data[idx.RewardId];
		this.BookExp = data[idx.BookExp];
	}
}
export class cabinet_rewardDBMgr {
    cabinet_rewardDBConfig : {[ID:number]: cabinet_rewardDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.cabinet_rewardDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.cabinet_rewardDBConfig[data[i][idx.ID]] = new cabinet_rewardDB(data[i], idx);
        }
    }
    public get(ID:number):cabinet_rewardDB {
        return this.cabinet_rewardDBConfig[ID];
    }
    public all():{[ID:number]: cabinet_rewardDB} {
        return this.cabinet_rewardDBConfig;
    }
}

// child_aptitudedb
export class child_aptitudeDB {
	ID:any;			//ID
	MaxLv:any;		//MaxLv
	Text_Name:any;	//Text_Name
	Res:any;		//
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.MaxLv = data[idx.MaxLv];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.Res = data[idx.Res];
	}
}
export class child_aptitudeDBMgr {
    child_aptitudeDBConfig : {[ID:number]: child_aptitudeDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.child_aptitudeDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.child_aptitudeDBConfig[data[i][idx.ID]] = new child_aptitudeDB(data[i], idx);
        }
    }
    public get(ID:number):child_aptitudeDB {
        return this.child_aptitudeDBConfig[ID];
    }
    public all():{[ID:number]: child_aptitudeDB} {
        return this.child_aptitudeDBConfig;
    }
}

// child_aptitude_makedb
export class child_aptitude_makeDB {
	ID:any;					//ID
	JSON_AptitudeId:any;	//JSON_AptitudeId
	LoveValueMin:any;		//LoveValueMin
	LoveValueMax:any;		//LoveValueMax
	JSON_Rate:any;			//JSON_Rate
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.JSON_AptitudeId = data[idx.JSON_AptitudeId];
		this.LoveValueMin = data[idx.LoveValueMin];
		this.LoveValueMax = data[idx.LoveValueMax];
		this.JSON_Rate = data[idx.JSON_Rate];
	}
}
export class child_aptitude_makeDBMgr {
    child_aptitude_makeDBConfig : {[ID:number]: child_aptitude_makeDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.child_aptitude_makeDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.child_aptitude_makeDBConfig[data[i][idx.ID]] = new child_aptitude_makeDB(data[i], idx);
        }
    }
    public get(ID:number):child_aptitude_makeDB {
        return this.child_aptitude_makeDBConfig[ID];
    }
    public all():{[ID:number]: child_aptitude_makeDB} {
        return this.child_aptitude_makeDBConfig;
    }
}

// child_infodb
export class child_infoDB {
	ID:any;			//ID
	BodyPath:any;	//BodyPath
	ModelId:any;	//ModelId
	Sex:any;		//Sex
	JSON_Voice:any;	//JSON_Voice
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BodyPath = data[idx.BodyPath];
		this.ModelId = data[idx.ModelId];
		this.Sex = data[idx.Sex];
		this.JSON_Voice = data[idx.JSON_Voice];
	}
}
export class child_infoDBMgr {
    child_infoDBConfig : {[ID:number]: child_infoDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.child_infoDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.child_infoDBConfig[data[i][idx.ID]] = new child_infoDB(data[i], idx);
        }
    }
    public get(ID:number):child_infoDB {
        return this.child_infoDBConfig[ID];
    }
    public all():{[ID:number]: child_infoDB} {
        return this.child_infoDBConfig;
    }
}

// child_lv_updb
export class child_lv_upDB {
	ID:any;		//ID
	Exp:any;	//Exp
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Exp = data[idx.Exp];
	}
}
export class child_lv_upDBMgr {
    child_lv_upDBConfig : {[ID:number]: child_lv_upDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.child_lv_upDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.child_lv_upDBConfig[data[i][idx.ID]] = new child_lv_upDB(data[i], idx);
        }
    }
    public get(ID:number):child_lv_upDB {
        return this.child_lv_upDBConfig[ID];
    }
    public all():{[ID:number]: child_lv_upDB} {
        return this.child_lv_upDBConfig;
    }
}

// child_seatdb
export class child_seatDB {
	ID:any;			//ID
	Consume:any;	//Consume
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Consume = data[idx.Consume];
	}
}
export class child_seatDBMgr {
    child_seatDBConfig : {[ID:number]: child_seatDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.child_seatDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.child_seatDBConfig[data[i][idx.ID]] = new child_seatDB(data[i], idx);
        }
    }
    public get(ID:number):child_seatDB {
        return this.child_seatDBConfig[ID];
    }
    public all():{[ID:number]: child_seatDB} {
        return this.child_seatDBConfig;
    }
}

// child_typedb
export class child_typeDB {
	ID:any;				//ID
	JSON_Attribute:any;	//JSON_Attribute
	ManBody:any;		//ManBody
	MarryCustom:any;	//MarryCustom
	MarryReward:any;	//MarryReward
	Text_Name:any;		//Text_Name
	TypePath:any;		//TypePath
	TypePath2:any;		//TypePath2
	WomanBody:any;		//WomanBody
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.JSON_Attribute = data[idx.JSON_Attribute];
		this.ManBody = data[idx.ManBody];
		this.MarryCustom = data[idx.MarryCustom];
		this.MarryReward = data[idx.MarryReward];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.TypePath = data[idx.TypePath];
		this.TypePath2 = data[idx.TypePath2];
		this.WomanBody = data[idx.WomanBody];
	}
}
export class child_typeDBMgr {
    child_typeDBConfig : {[ID:number]: child_typeDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.child_typeDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.child_typeDBConfig[data[i][idx.ID]] = new child_typeDB(data[i], idx);
        }
    }
    public get(ID:number):child_typeDB {
        return this.child_typeDBConfig[ID];
    }
    public all():{[ID:number]: child_typeDB} {
        return this.child_typeDBConfig;
    }
}

// consumedb
export class consumeDB {
	ID:any;				//ID
	MarkId:any;			//MarkId
	JSON_Consume:any;	//JSON_Consume
	ConsumeType:any;	//ConsumeType
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.MarkId = data[idx.MarkId];
		this.JSON_Consume = data[idx.JSON_Consume];
		this.ConsumeType = data[idx.ConsumeType];
	}
}
export class consumeDBMgr {
    consumeDBConfig : {[ID:number]: consumeDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.consumeDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.consumeDBConfig[data[i][idx.ID]] = new consumeDB(data[i], idx);
        }
    }
    public get(ID:number):consumeDB {
        return this.consumeDBConfig[ID];
    }
    public all():{[ID:number]: consumeDB} {
        return this.consumeDBConfig;
    }
}

// debate_buffdb
export class debate_buffDB {
	ID:any;				//ID
	BuffAttribute:any;	//BuffAttribute
	BuffIcon:any;		//BuffIcon
	BuffId:any;			//BuffId
	BuffType:any;		//BuffType
	JSON_BuffValue:any;	//JSON_BuffValue
	Consume:any;		//Consume
	Text_Des:any;		//Text_Des
	Text_Name:any;		//Text_Name
	JSON_Rate:any;		//JSON_Rate
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BuffAttribute = data[idx.BuffAttribute];
		this.BuffIcon = data[idx.BuffIcon];
		this.BuffId = data[idx.BuffId];
		this.BuffType = data[idx.BuffType];
		this.JSON_BuffValue = data[idx.JSON_BuffValue];
		this.Consume = data[idx.Consume];
		this.Text_Des = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Des] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Des]).Name);
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.JSON_Rate = data[idx.JSON_Rate];
	}
}
export class debate_buffDBMgr {
    debate_buffDBConfig : {[ID:number]: debate_buffDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.debate_buffDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.debate_buffDBConfig[data[i][idx.ID]] = new debate_buffDB(data[i], idx);
        }
    }
    public get(ID:number):debate_buffDB {
        return this.debate_buffDBConfig[ID];
    }
    public all():{[ID:number]: debate_buffDB} {
        return this.debate_buffDBConfig;
    }
}

// dialog_infodb
export class dialog_infoDB {
	ID:any;					//ID
	BgPath:any;				//BgPath
	Text_DialogInfo:any;	//Text_DialogInfo
	Id:any;					//Id
	NpcPosition:any;		//NpcPosition
	NpcType:any;			//NpcType
	StepID:any;				//StepID
	NpcId:any;				//NpcId
	ScaleX:any;				//ScaleX
	ScaleY:any;				//ScaleY
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BgPath = data[idx.BgPath];
		this.Text_DialogInfo = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_DialogInfo] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_DialogInfo]).Name);
		this.Id = data[idx.Id];
		this.NpcPosition = data[idx.NpcPosition];
		this.NpcType = data[idx.NpcType];
		this.StepID = data[idx.StepID];
		this.NpcId = data[idx.NpcId];
		this.ScaleX = data[idx.ScaleX];
		this.ScaleY = data[idx.ScaleY];
	}
}
export class dialog_infoDBMgr {
    dialog_infoDBConfig : {[ID:number]: dialog_infoDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.dialog_infoDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.dialog_infoDBConfig[data[i][idx.ID]] = new dialog_infoDB(data[i], idx);
        }
    }
    public get(ID:number):dialog_infoDB {
        return this.dialog_infoDBConfig[ID];
    }
    public all():{[ID:number]: dialog_infoDB} {
        return this.dialog_infoDBConfig;
    }
}

// error_code_infodb
export class error_code_infoDB {
	ID:any;					//ID
	Text_Info:any;			//Text_Info
	Text_DetailInfo:any;	//Text_DetailInfo
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Text_Info = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Info] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Info]).Name);
		this.Text_DetailInfo = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_DetailInfo] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_DetailInfo]).Name);
	}
}
export class error_code_infoDBMgr {
    error_code_infoDBConfig : {[ID:number]: error_code_infoDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.error_code_infoDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.error_code_infoDBConfig[data[i][idx.ID]] = new error_code_infoDB(data[i], idx);
        }
    }
    public get(ID:number):error_code_infoDB {
        return this.error_code_infoDBConfig[ID];
    }
    public all():{[ID:number]: error_code_infoDB} {
        return this.error_code_infoDBConfig;
    }
}

// fb_exchangedb
export class fb_exchangeDB {
	ID:any;			//ID
	ChangeId:any;	//ChangeId
	Consume:any;	//Consume
	Id:any;			//Id
	Needs:any;		//Needs
	Reward:any;		//Reward
	Times:any;		//Times
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.ChangeId = data[idx.ChangeId];
		this.Consume = data[idx.Consume];
		this.Id = data[idx.Id];
		this.Needs = data[idx.Needs];
		this.Reward = data[idx.Reward];
		this.Times = data[idx.Times];
	}
}
export class fb_exchangeDBMgr {
    fb_exchangeDBConfig : {[ID:number]: fb_exchangeDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.fb_exchangeDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.fb_exchangeDBConfig[data[i][idx.ID]] = new fb_exchangeDB(data[i], idx);
        }
    }
    public get(ID:number):fb_exchangeDB {
        return this.fb_exchangeDBConfig[ID];
    }
    public all():{[ID:number]: fb_exchangeDB} {
        return this.fb_exchangeDBConfig;
    }
}

// fb_rebelliondb
export class fb_rebellionDB {
	ID:any;				//ID
	HeadPath:any;		//HeadPath
	Hp:any;				//Hp
	Text_Name:any;		//Text_Name
	Path:any;			//Path
	JSON_Reward:any;	//JSON_Reward
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.HeadPath = data[idx.HeadPath];
		this.Hp = data[idx.Hp];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.Path = data[idx.Path];
		this.JSON_Reward = data[idx.JSON_Reward];
	}
}
export class fb_rebellionDBMgr {
    fb_rebellionDBConfig : {[ID:number]: fb_rebellionDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.fb_rebellionDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.fb_rebellionDBConfig[data[i][idx.ID]] = new fb_rebellionDB(data[i], idx);
        }
    }
    public get(ID:number):fb_rebellionDB {
        return this.fb_rebellionDBConfig[ID];
    }
    public all():{[ID:number]: fb_rebellionDB} {
        return this.fb_rebellionDBConfig;
    }
}

// fb_worldbossdb
export class fb_worldbossDB {
	ID:any;			//ID
	HeadPath:any;	//HeadPath
	HitReward:any;	//HitReward
	Hp:any;			//Hp
	ID_ORIGIN:any;	//ID_ORIGIN
	Text_Name:any;	//Text_Name
	Path:any;		//Path
	RankReward:any;	//RankReward
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.HeadPath = data[idx.HeadPath];
		this.HitReward = data[idx.HitReward];
		this.Hp = data[idx.Hp];
		this.ID_ORIGIN = data[idx.ID_ORIGIN];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.Path = data[idx.Path];
		this.RankReward = data[idx.RankReward];
	}
}
export class fb_worldbossDBMgr {
    fb_worldbossDBConfig : {[ID:number]: fb_worldbossDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.fb_worldbossDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.fb_worldbossDBConfig[data[i][idx.ID]] = new fb_worldbossDB(data[i], idx);
        }
    }
    public get(ID:number):fb_worldbossDB {
        return this.fb_worldbossDBConfig[ID];
    }
    public all():{[ID:number]: fb_worldbossDB} {
        return this.fb_worldbossDBConfig;
    }
}

// guidedb
export class guideDB {
	ID:any;						//AdultChildCountThanCount
	Index:any;					//Index
	JSON_CmdIds:any;			//JSON_CmdIds
	Text_Desc:any;				//Text_Desc
	JSON_TriggerCondition:any;	//JSON_TriggerCondition
	JSON_GlobalSkipIndex:any;	//JSON_GlobalSkipIndex
	JSON_GlobalSkipStep:any;	//JSON_GlobalSkipStep
	JSON_OperationNode:any;		//JSON_OperationNode
	JSON_RuntimeSkipStep:any;	//JSON_RuntimeSkipStep
	Step:any;					//Step
	PreStep:any;				//PreStep
	KeyStep:any;				//KeyStep
	JSON_Data:any;				//JSON_Data
	JSON_Data1:any;				//JSON_Data1
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Index = data[idx.Index];
		this.JSON_CmdIds = data[idx.JSON_CmdIds];
		this.Text_Desc = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Desc] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Desc]).Name);
		this.JSON_TriggerCondition = data[idx.JSON_TriggerCondition];
		this.JSON_GlobalSkipIndex = data[idx.JSON_GlobalSkipIndex];
		this.JSON_GlobalSkipStep = data[idx.JSON_GlobalSkipStep];
		this.JSON_OperationNode = data[idx.JSON_OperationNode];
		this.JSON_RuntimeSkipStep = data[idx.JSON_RuntimeSkipStep];
		this.Step = data[idx.Step];
		this.PreStep = data[idx.PreStep];
		this.KeyStep = data[idx.KeyStep];
		this.JSON_Data = data[idx.JSON_Data];
		this.JSON_Data1 = data[idx.JSON_Data1];
	}
}
export class guideDBMgr {
    guideDBConfig : {[ID:number]: guideDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.guideDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.guideDBConfig[data[i][idx.ID]] = new guideDB(data[i], idx);
        }
    }
    public get(ID:number):guideDB {
        return this.guideDBConfig[ID];
    }
    public all():{[ID:number]: guideDB} {
        return this.guideDBConfig;
    }
}

// guide_cmddb
export class guide_cmdDB {
	ID:any;		//ID
	Name:any;	//Name
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Name = data[idx.Name];
	}
}
export class guide_cmdDBMgr {
    guide_cmdDBConfig : {[ID:number]: guide_cmdDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.guide_cmdDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.guide_cmdDBConfig[data[i][idx.ID]] = new guide_cmdDB(data[i], idx);
        }
    }
    public get(ID:number):guide_cmdDB {
        return this.guide_cmdDBConfig[ID];
    }
    public all():{[ID:number]: guide_cmdDB} {
        return this.guide_cmdDBConfig;
    }
}

// guide_dialogdb
export class guide_dialogDB {
	ID:any;					//ID
	BgPath:any;				//BgPath
	Text_DialogInfo:any;	//Text_DialogInfo
	Hide:any;				//Hide
	Id:any;					//Id
	NpcPosition:any;		//NpcPosition
	NpcType:any;			//NpcType
	StepID:any;				//StepID
	NpcId:any;				//NpcId
	FlipModel:any;			//FlipModel
	ScaleX:any;				//ScaleX
	ScaleY:any;				//ScaleY
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BgPath = data[idx.BgPath];
		this.Text_DialogInfo = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_DialogInfo] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_DialogInfo]).Name);
		this.Hide = data[idx.Hide];
		this.Id = data[idx.Id];
		this.NpcPosition = data[idx.NpcPosition];
		this.NpcType = data[idx.NpcType];
		this.StepID = data[idx.StepID];
		this.NpcId = data[idx.NpcId];
		this.FlipModel = data[idx.FlipModel];
		this.ScaleX = data[idx.ScaleX];
		this.ScaleY = data[idx.ScaleY];
	}
}
export class guide_dialogDBMgr {
    guide_dialogDBConfig : {[ID:number]: guide_dialogDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.guide_dialogDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.guide_dialogDBConfig[data[i][idx.ID]] = new guide_dialogDB(data[i], idx);
        }
    }
    public get(ID:number):guide_dialogDB {
        return this.guide_dialogDBConfig[ID];
    }
    public all():{[ID:number]: guide_dialogDB} {
        return this.guide_dialogDBConfig;
    }
}

// guild_bossdb
export class guild_bossDB {
	ID:any;					//ID
	Text_BossDesc:any;		//Text_BossDesc
	BossLv:any;				//BossLv
	Text_BossName:any;		//Text_BossName
	BossPath:any;			//BossPath
	Consume:any;			//Consume
	GuildContribution:any;	//GuildContribution
	GuildExp:any;			//GuildExp
	GuildReward:any;		//GuildReward
	Hp:any;					//Hp
	KillerReward:any;		//KillerReward
	NeedGuildLv:any;		//NeedGuildLv
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Text_BossDesc = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_BossDesc] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_BossDesc]).Name);
		this.BossLv = data[idx.BossLv];
		this.Text_BossName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_BossName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_BossName]).Name);
		this.BossPath = data[idx.BossPath];
		this.Consume = data[idx.Consume];
		this.GuildContribution = data[idx.GuildContribution];
		this.GuildExp = data[idx.GuildExp];
		this.GuildReward = data[idx.GuildReward];
		this.Hp = data[idx.Hp];
		this.KillerReward = data[idx.KillerReward];
		this.NeedGuildLv = data[idx.NeedGuildLv];
	}
}
export class guild_bossDBMgr {
    guild_bossDBConfig : {[ID:number]: guild_bossDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.guild_bossDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.guild_bossDBConfig[data[i][idx.ID]] = new guild_bossDB(data[i], idx);
        }
    }
    public get(ID:number):guild_bossDB {
        return this.guild_bossDBConfig[ID];
    }
    public all():{[ID:number]: guild_bossDB} {
        return this.guild_bossDBConfig;
    }
}

// guild_builddb
export class guild_buildDB {
	ID:any;			//ID
	BuildId:any;	//BuildId
	Consume:any;	//Consume
	Text_Name:any;	//Text_Name
	Path:any;		//Path
	Reward:any;		//Reward
	ShowSort:any;	//ShowSort
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BuildId = data[idx.BuildId];
		this.Consume = data[idx.Consume];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.Path = data[idx.Path];
		this.Reward = data[idx.Reward];
		this.ShowSort = data[idx.ShowSort];
	}
}
export class guild_buildDBMgr {
    guild_buildDBConfig : {[ID:number]: guild_buildDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.guild_buildDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.guild_buildDBConfig[data[i][idx.ID]] = new guild_buildDB(data[i], idx);
        }
    }
    public get(ID:number):guild_buildDB {
        return this.guild_buildDBConfig[ID];
    }
    public all():{[ID:number]: guild_buildDB} {
        return this.guild_buildDBConfig;
    }
}

// guild_exchangedb
export class guild_exchangeDB {
	ID:any;			//ID
	ExchangeId:any;	//ExchangeId
	GuildLv:any;	//GuildLv
	ShowSort:any;	//ShowSort
	TimeLimit:any;	//TimeLimit
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.ExchangeId = data[idx.ExchangeId];
		this.GuildLv = data[idx.GuildLv];
		this.ShowSort = data[idx.ShowSort];
		this.TimeLimit = data[idx.TimeLimit];
	}
}
export class guild_exchangeDBMgr {
    guild_exchangeDBConfig : {[ID:number]: guild_exchangeDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.guild_exchangeDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.guild_exchangeDBConfig[data[i][idx.ID]] = new guild_exchangeDB(data[i], idx);
        }
    }
    public get(ID:number):guild_exchangeDB {
        return this.guild_exchangeDBConfig[ID];
    }
    public all():{[ID:number]: guild_exchangeDB} {
        return this.guild_exchangeDBConfig;
    }
}

// guild_exchange_itemdb
export class guild_exchange_itemDB {
	ID:any;			//ID
	Consume:any;	//Consume
	ExchangeId:any;	//ExchangeId
	Reward:any;		//Reward
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Consume = data[idx.Consume];
		this.ExchangeId = data[idx.ExchangeId];
		this.Reward = data[idx.Reward];
	}
}
export class guild_exchange_itemDBMgr {
    guild_exchange_itemDBConfig : {[ID:number]: guild_exchange_itemDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.guild_exchange_itemDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.guild_exchange_itemDBConfig[data[i][idx.ID]] = new guild_exchange_itemDB(data[i], idx);
        }
    }
    public get(ID:number):guild_exchange_itemDB {
        return this.guild_exchange_itemDBConfig[ID];
    }
    public all():{[ID:number]: guild_exchange_itemDB} {
        return this.guild_exchange_itemDBConfig;
    }
}

// guild_lvdb
export class guild_lvDB {
	ID:any;				//ID
	Exp:any;			//Exp
	GuildLv:any;		//GuildLv
	MemberLimit:any;	//MemberLimit
	Position2Limit:any;	//Position2Limit
	Position3Limit:any;	//Position3Limit
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Exp = data[idx.Exp];
		this.GuildLv = data[idx.GuildLv];
		this.MemberLimit = data[idx.MemberLimit];
		this.Position2Limit = data[idx.Position2Limit];
		this.Position3Limit = data[idx.Position3Limit];
	}
}
export class guild_lvDBMgr {
    guild_lvDBConfig : {[ID:number]: guild_lvDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.guild_lvDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.guild_lvDBConfig[data[i][idx.ID]] = new guild_lvDB(data[i], idx);
        }
    }
    public get(ID:number):guild_lvDB {
        return this.guild_lvDBConfig[ID];
    }
    public all():{[ID:number]: guild_lvDB} {
        return this.guild_lvDBConfig;
    }
}

// guild_officedb
export class guild_officeDB {
	ID:any;						//ID
	CanAppointDeputy:any;		//CanAppointDeputy
	CanAppointElite:any;		//CanAppointElite
	CanAppointNormal:any;		//CanAppointNormal
	CanApprovalNewcomer:any;	//CanApprovalNewcomer
	CanAssetOpenBoss:any;		//CanAssetOpenBoss
	CanChangeName:any;			//CanChangeName
	CanDelGuild:any;			//CanDelGuild
	CanDelMember:any;			//CanDelMember
	CanEditGuild:any;			//CanEditGuild
	CanExitGuild:any;			//CanExitGuild
	CanGoldOpenBoss:any;		//CanGoldOpenBoss
	Text_Name:any;				//Text_Name
	OfficeId:any;				//OfficeId
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.CanAppointDeputy = data[idx.CanAppointDeputy];
		this.CanAppointElite = data[idx.CanAppointElite];
		this.CanAppointNormal = data[idx.CanAppointNormal];
		this.CanApprovalNewcomer = data[idx.CanApprovalNewcomer];
		this.CanAssetOpenBoss = data[idx.CanAssetOpenBoss];
		this.CanChangeName = data[idx.CanChangeName];
		this.CanDelGuild = data[idx.CanDelGuild];
		this.CanDelMember = data[idx.CanDelMember];
		this.CanEditGuild = data[idx.CanEditGuild];
		this.CanExitGuild = data[idx.CanExitGuild];
		this.CanGoldOpenBoss = data[idx.CanGoldOpenBoss];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.OfficeId = data[idx.OfficeId];
	}
}
export class guild_officeDBMgr {
    guild_officeDBConfig : {[ID:number]: guild_officeDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.guild_officeDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.guild_officeDBConfig[data[i][idx.ID]] = new guild_officeDB(data[i], idx);
        }
    }
    public get(ID:number):guild_officeDB {
        return this.guild_officeDBConfig[ID];
    }
    public all():{[ID:number]: guild_officeDB} {
        return this.guild_officeDBConfig;
    }
}

// halo_adb
export class halo_aDB {
	ID:any;				//ID
	JSON_Effect:any;	//光环效果
	HaloId:any;			//光环id
	HeroCount:any;		//光环等级
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.JSON_Effect = data[idx.JSON_Effect];
		this.HaloId = data[idx.HaloId];
		this.HeroCount = data[idx.HeroCount];
	}
}
export class halo_aDBMgr {
    halo_aDBConfig : {[ID:number]: halo_aDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.halo_aDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.halo_aDBConfig[data[i][idx.ID]] = new halo_aDB(data[i], idx);
        }
    }
    public get(ID:number):halo_aDB {
        return this.halo_aDBConfig[ID];
    }
    public all():{[ID:number]: halo_aDB} {
        return this.halo_aDBConfig;
    }
}

// halo_bdb
export class halo_bDB {
	ID:any;				//HaloId
	HaloLv:any;			//HaloLv
	Text_HaloName:any;	//Text_HaloName
	ImagePath:any;		//ImagePath
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.HaloLv = data[idx.HaloLv];
		this.Text_HaloName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_HaloName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_HaloName]).Name);
		this.ImagePath = data[idx.ImagePath];
	}
}
export class halo_bDBMgr {
    halo_bDBConfig : {[ID:number]: halo_bDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.halo_bDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.halo_bDBConfig[data[i][idx.ID]] = new halo_bDB(data[i], idx);
        }
    }
    public get(ID:number):halo_bDB {
        return this.halo_bDBConfig[ID];
    }
    public all():{[ID:number]: halo_bDB} {
        return this.halo_bDBConfig;
    }
}

// halo_b_updb
export class halo_b_upDB {
	ID:any;				//ID
	Consume:any;		//Consume
	JSON_Effect:any;	//JSON_Effect
	HaloID:any;			//HaloID
	HaloLv:any;			//HaloLv
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Consume = data[idx.Consume];
		this.JSON_Effect = data[idx.JSON_Effect];
		this.HaloID = data[idx.HaloID];
		this.HaloLv = data[idx.HaloLv];
	}
}
export class halo_b_upDBMgr {
    halo_b_upDBConfig : {[ID:number]: halo_b_upDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.halo_b_upDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.halo_b_upDBConfig[data[i][idx.ID]] = new halo_b_upDB(data[i], idx);
        }
    }
    public get(ID:number):halo_b_upDB {
        return this.halo_b_upDBConfig[ID];
    }
    public all():{[ID:number]: halo_b_upDB} {
        return this.halo_b_upDBConfig;
    }
}

// hanlin_bookdb
export class hanlin_bookDB {
	ID:any;		//ID
	BookId:any;	//BookId
	Exp:any;	//Exp
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BookId = data[idx.BookId];
		this.Exp = data[idx.Exp];
	}
}
export class hanlin_bookDBMgr {
    hanlin_bookDBConfig : {[ID:number]: hanlin_bookDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.hanlin_bookDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.hanlin_bookDBConfig[data[i][idx.ID]] = new hanlin_bookDB(data[i], idx);
        }
    }
    public get(ID:number):hanlin_bookDB {
        return this.hanlin_bookDBConfig[ID];
    }
    public all():{[ID:number]: hanlin_bookDB} {
        return this.hanlin_bookDBConfig;
    }
}

// harvest_relative_activity_shopdb
export class harvest_relative_activity_shopDB {
	ID:any;				//ID
	ActId:any;			//Id
	ShopType:any;		//ShopType
	BuyCnt:any;			//BuyCnt
	JSON_Consume:any;	//JSON_Consume
	Index:any;			//Index
	JSON_Award:any;		//JSON_Award
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.ActId = data[idx.ActId];
		this.ShopType = data[idx.ShopType];
		this.BuyCnt = data[idx.BuyCnt];
		this.JSON_Consume = data[idx.JSON_Consume];
		this.Index = data[idx.Index];
		this.JSON_Award = data[idx.JSON_Award];
	}
}
export class harvest_relative_activity_shopDBMgr {
    harvest_relative_activity_shopDBConfig : {[ID:number]: harvest_relative_activity_shopDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.harvest_relative_activity_shopDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.harvest_relative_activity_shopDBConfig[data[i][idx.ID]] = new harvest_relative_activity_shopDB(data[i], idx);
        }
    }
    public get(ID:number):harvest_relative_activity_shopDB {
        return this.harvest_relative_activity_shopDBConfig[ID];
    }
    public all():{[ID:number]: harvest_relative_activity_shopDB} {
        return this.harvest_relative_activity_shopDBConfig;
    }
}

// herodb
export class heroDB {
	ID:any;					//ID
	Text_HeroName:any;		//Text_HeroName
	HeroType:any;			//HeroType
	JSON_ForceBook:any;		//武力书籍
	JSON_BrainsBook:any;	//智慧书籍
	JSON_PoliticalBook:any;	//政治书籍
	JSON_PrestigeBook:any;	//威望书籍
	JSON_Skill:any;			//技能
	JSON_SpecialtyID:any;	//特长
	HeadPath:any;			//头像
	BodyPath:any;			//半身像
	HeroVoice:any;			//配音
	ShowSort:any;			//排序
	UnLockType:any;			//解锁类型
	UnLockValue:any;		//UnLockValue
	DialogId:any;			//DialogId
	JSON_UnLockInfo:any;	//解锁道具
	HaloAId:any;			//HaloAId
	JSON_HaloBId:any;		//JSON_HaloBId
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Text_HeroName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_HeroName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_HeroName]).Name);
		this.HeroType = data[idx.HeroType];
		this.JSON_ForceBook = data[idx.JSON_ForceBook];
		this.JSON_BrainsBook = data[idx.JSON_BrainsBook];
		this.JSON_PoliticalBook = data[idx.JSON_PoliticalBook];
		this.JSON_PrestigeBook = data[idx.JSON_PrestigeBook];
		this.JSON_Skill = data[idx.JSON_Skill];
		this.JSON_SpecialtyID = data[idx.JSON_SpecialtyID];
		this.HeadPath = data[idx.HeadPath];
		this.BodyPath = data[idx.BodyPath];
		this.HeroVoice = data[idx.HeroVoice];
		this.ShowSort = data[idx.ShowSort];
		this.UnLockType = data[idx.UnLockType];
		this.UnLockValue = data[idx.UnLockValue];
		this.DialogId = data[idx.DialogId];
		this.JSON_UnLockInfo = data[idx.JSON_UnLockInfo];
		this.HaloAId = data[idx.HaloAId];
		this.JSON_HaloBId = data[idx.JSON_HaloBId];
	}
}
export class heroDBMgr {
    heroDBConfig : {[ID:number]: heroDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.heroDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.heroDBConfig[data[i][idx.ID]] = new heroDB(data[i], idx);
        }
    }
    public get(ID:number):heroDB {
        return this.heroDBConfig[ID];
    }
    public all():{[ID:number]: heroDB} {
        return this.heroDBConfig;
    }
}

// hero_lv_updb
export class hero_lv_upDB {
	ID:any;			//ID
	HeroLV:any;		//HeroLV
	NeedExp:any;	//NeedExp
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.HeroLV = data[idx.HeroLV];
		this.NeedExp = data[idx.NeedExp];
	}
}
export class hero_lv_upDBMgr {
    hero_lv_upDBConfig : {[ID:number]: hero_lv_upDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.hero_lv_upDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.hero_lv_upDBConfig[data[i][idx.ID]] = new hero_lv_upDB(data[i], idx);
        }
    }
    public get(ID:number):hero_lv_upDB {
        return this.hero_lv_upDBConfig[ID];
    }
    public all():{[ID:number]: hero_lv_upDB} {
        return this.hero_lv_upDBConfig;
    }
}

// itemdb
export class itemDB {
	ID:any;					//ID
	Text_ItemName:any;		//Text_ItemName
	BottomLight:any;		//BottomLight
	IconPath:any;			//IconPath
	IsBox:any;				//IsBox
	IsOutUp:any;			//IsOutUp
	ItemCost:any;			//ItemCost
	Text_ItemDesc:any;		//Text_ItemDesc
	ItemExpired:any;		//ItemExpired
	Text_ItemOutUp:any;		//Text_ItemOutUp
	ItemStatus:any;			//ItemStatus
	Quality:any;			//Quality
	Repeat:any;				//Repeat
	Reward:any;				//Reward
	ShowSort:any;			//ShowSort
	UseType:any;			//UseType
	ExpiredTime:any;		//ExpiredTime
	OfficeOpen:any;			//OfficeOpen
	ExtraReward:any;		//ExtraReward
	FormulaRewardRatio:any;	//FormulaRewardRatio
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Text_ItemName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_ItemName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_ItemName]).Name);
		this.BottomLight = data[idx.BottomLight];
		this.IconPath = data[idx.IconPath];
		this.IsBox = data[idx.IsBox];
		this.IsOutUp = data[idx.IsOutUp];
		this.ItemCost = data[idx.ItemCost];
		this.Text_ItemDesc = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_ItemDesc] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_ItemDesc]).Name);
		this.ItemExpired = data[idx.ItemExpired];
		this.Text_ItemOutUp = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_ItemOutUp] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_ItemOutUp]).Name);
		this.ItemStatus = data[idx.ItemStatus];
		this.Quality = data[idx.Quality];
		this.Repeat = data[idx.Repeat];
		this.Reward = data[idx.Reward];
		this.ShowSort = data[idx.ShowSort];
		this.UseType = data[idx.UseType];
		this.ExpiredTime = data[idx.ExpiredTime];
		this.OfficeOpen = data[idx.OfficeOpen];
		this.ExtraReward = data[idx.ExtraReward];
		this.FormulaRewardRatio = data[idx.FormulaRewardRatio];
	}
}
export class itemDBMgr {
    itemDBConfig : {[ID:number]: itemDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.itemDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.itemDBConfig[data[i][idx.ID]] = new itemDB(data[i], idx);
        }
    }
    public get(ID:number):itemDB {
        return this.itemDBConfig[ID];
    }
    public all():{[ID:number]: itemDB} {
        return this.itemDBConfig;
    }
}

// item_compounddb
export class item_compoundDB {
	ID:any;			//ID
	Consume:any;	//Consume
	Text_Name:any;	//Text_Name
	Type:any;		//Type
	TriesLimit:any;	//TriesLimit
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Consume = data[idx.Consume];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.Type = data[idx.Type];
		this.TriesLimit = data[idx.TriesLimit];
	}
}
export class item_compoundDBMgr {
    item_compoundDBConfig : {[ID:number]: item_compoundDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.item_compoundDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.item_compoundDBConfig[data[i][idx.ID]] = new item_compoundDB(data[i], idx);
        }
    }
    public get(ID:number):item_compoundDB {
        return this.item_compoundDBConfig[ID];
    }
    public all():{[ID:number]: item_compoundDB} {
        return this.item_compoundDBConfig;
    }
}

// leveldb
export class levelDB {
	ID:any;					//ID
	BgId:any;				//BgId
	Text_BossDialog:any;	//Text_BossDialog
	BossId:any;				//BossId
	Text_BossInfo:any;		//Text_BossInfo
	Text_BossName:any;		//Text_BossName
	BossOffice:any;			//BossOffice
	LevelId:any;			//LevelId
	Text_Name:any;			//Text_Name
	NamePath:any;			//NamePath
	Prestige:any;			//Prestige
	PrisonerID:any;			//PrisonerID
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BgId = data[idx.BgId];
		this.Text_BossDialog = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_BossDialog] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_BossDialog]).Name);
		this.BossId = data[idx.BossId];
		this.Text_BossInfo = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_BossInfo] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_BossInfo]).Name);
		this.Text_BossName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_BossName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_BossName]).Name);
		this.BossOffice = data[idx.BossOffice];
		this.LevelId = data[idx.LevelId];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.NamePath = data[idx.NamePath];
		this.Prestige = data[idx.Prestige];
		this.PrisonerID = data[idx.PrisonerID];
	}
}
export class levelDBMgr {
    levelDBConfig : {[ID:number]: levelDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.levelDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.levelDBConfig[data[i][idx.ID]] = new levelDB(data[i], idx);
        }
    }
    public get(ID:number):levelDB {
        return this.levelDBConfig[ID];
    }
    public all():{[ID:number]: levelDB} {
        return this.levelDBConfig;
    }
}

// level_progress_additiondb
export class level_progress_additionDB {
	ID:any;			//ID
	Progress:any;	//Progress
	Value:any;		//Value
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Progress = data[idx.Progress];
		this.Value = data[idx.Value];
	}
}
export class level_progress_additionDBMgr {
    level_progress_additionDBConfig : {[ID:number]: level_progress_additionDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.level_progress_additionDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.level_progress_additionDBConfig[data[i][idx.ID]] = new level_progress_additionDB(data[i], idx);
        }
    }
    public get(ID:number):level_progress_additionDB {
        return this.level_progress_additionDBConfig[ID];
    }
    public all():{[ID:number]: level_progress_additionDB} {
        return this.level_progress_additionDBConfig;
    }
}

// miracledb
export class miracleDB {
	ID:any;					//ID
	Text_Desc:any;			//Text_Desc
	Text_MiracleName:any;	//Text_MiracleName
	MiracleType:any;		//MiracleType
	NameIcon:any;			//NameIcon
	NameIcon2:any;			//NameIcon2
	Rate:any;				//Rate
	Text_Text:any;			//Text_Text
	Value:any;				//Value
	DayCounts:any;			//
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Text_Desc = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Desc] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Desc]).Name);
		this.Text_MiracleName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_MiracleName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_MiracleName]).Name);
		this.MiracleType = data[idx.MiracleType];
		this.NameIcon = data[idx.NameIcon];
		this.NameIcon2 = data[idx.NameIcon2];
		this.Rate = data[idx.Rate];
		this.Text_Text = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Text] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Text]).Name);
		this.Value = data[idx.Value];
		this.DayCounts = data[idx.DayCounts];
	}
}
export class miracleDBMgr {
    miracleDBConfig : {[ID:number]: miracleDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.miracleDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.miracleDBConfig[data[i][idx.ID]] = new miracleDB(data[i], idx);
        }
    }
    public get(ID:number):miracleDB {
        return this.miracleDBConfig[ID];
    }
    public all():{[ID:number]: miracleDB} {
        return this.miracleDBConfig;
    }
}

// module_opendb
export class module_openDB {
	ID:any;						//ID
	JSON_Condition:any;			//JSON_Condition
	Text_ConditionDetail:any;	//Text_ConditionDetail
	Text_ModuleDetail:any;		//Text_ModuleDetail
	Text_ModuleName:any;		//Text_ModuleName
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.JSON_Condition = data[idx.JSON_Condition];
		this.Text_ConditionDetail = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_ConditionDetail] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_ConditionDetail]).Name);
		this.Text_ModuleDetail = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_ModuleDetail] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_ModuleDetail]).Name);
		this.Text_ModuleName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_ModuleName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_ModuleName]).Name);
	}
}
export class module_openDBMgr {
    module_openDBConfig : {[ID:number]: module_openDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.module_openDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.module_openDBConfig[data[i][idx.ID]] = new module_openDB(data[i], idx);
        }
    }
    public get(ID:number):module_openDB {
        return this.module_openDBConfig[ID];
    }
    public all():{[ID:number]: module_openDB} {
        return this.module_openDBConfig;
    }
}

// notice_activitydb
export class notice_activityDB {
	ID:any;			//ID
	Text_Info:any;	//Text_Info
	Stype:any;		//Stype
	Text_Title:any;	//Text_Title
	Type:any;		//Type
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Text_Info = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Info] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Info]).Name);
		this.Stype = data[idx.Stype];
		this.Text_Title = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Title] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Title]).Name);
		this.Type = data[idx.Type];
	}
}
export class notice_activityDBMgr {
    notice_activityDBConfig : {[ID:number]: notice_activityDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.notice_activityDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.notice_activityDBConfig[data[i][idx.ID]] = new notice_activityDB(data[i], idx);
        }
    }
    public get(ID:number):notice_activityDB {
        return this.notice_activityDBConfig[ID];
    }
    public all():{[ID:number]: notice_activityDB} {
        return this.notice_activityDBConfig;
    }
}

// npcdb
export class npcDB {
	ID:any;				//ID
	BodyPath:any;		//BodyPath
	HeadPath:any;		//HeadPath
	NpcId:any;			//NpcId
	Text_NpcName:any;	//Text_NpcName
	NpcType:any;		//NpcType
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BodyPath = data[idx.BodyPath];
		this.HeadPath = data[idx.HeadPath];
		this.NpcId = data[idx.NpcId];
		this.Text_NpcName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_NpcName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_NpcName]).Name);
		this.NpcType = data[idx.NpcType];
	}
}
export class npcDBMgr {
    npcDBConfig : {[ID:number]: npcDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.npcDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.npcDBConfig[data[i][idx.ID]] = new npcDB(data[i], idx);
        }
    }
    public get(ID:number):npcDB {
        return this.npcDBConfig[ID];
    }
    public all():{[ID:number]: npcDB} {
        return this.npcDBConfig;
    }
}

// officedb
export class officeDB {
	ID:any;					//ID
	Clothing:any;			//Clothing
	Consume:any;			//Consume
	MaxAffairsCount:any;	//MaxAffairsCount
	MaxFoodCount:any;		//MaxFoodCount
	MaxMoneyCount:any;		//MaxMoneyCount
	MaxSoldierCount:any;	//MaxSoldierCount
	NeedExp:any;			//NeedExp
	OfficeIcon:any;			//OfficeIcon
	Text_OfficeName:any;	//Text_OfficeName
	RestoreInterval:any;	//RestoreInterval
	Salary:any;				//Salary
	UnLockHero:any;			//UnLockHero
	Reward:any;				//Reward
	HanLinExp:any;			//HanLinExp
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Clothing = data[idx.Clothing];
		this.Consume = data[idx.Consume];
		this.MaxAffairsCount = data[idx.MaxAffairsCount];
		this.MaxFoodCount = data[idx.MaxFoodCount];
		this.MaxMoneyCount = data[idx.MaxMoneyCount];
		this.MaxSoldierCount = data[idx.MaxSoldierCount];
		this.NeedExp = data[idx.NeedExp];
		this.OfficeIcon = data[idx.OfficeIcon];
		this.Text_OfficeName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_OfficeName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_OfficeName]).Name);
		this.RestoreInterval = data[idx.RestoreInterval];
		this.Salary = data[idx.Salary];
		this.UnLockHero = data[idx.UnLockHero];
		this.Reward = data[idx.Reward];
		this.HanLinExp = data[idx.HanLinExp];
	}
}
export class officeDBMgr {
    officeDBConfig : {[ID:number]: officeDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.officeDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.officeDBConfig[data[i][idx.ID]] = new officeDB(data[i], idx);
        }
    }
    public get(ID:number):officeDB {
        return this.officeDBConfig[ID];
    }
    public all():{[ID:number]: officeDB} {
        return this.officeDBConfig;
    }
}

// pingbicidb
export class pingbiciDB {
	ID:any;		//ID
	NAME:any;	//NAME
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.NAME = data[idx.NAME];
	}
}
export class pingbiciDBMgr {
    pingbiciDBConfig : {[ID:number]: pingbiciDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.pingbiciDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.pingbiciDBConfig[data[i][idx.ID]] = new pingbiciDB(data[i], idx);
        }
    }
    public get(ID:number):pingbiciDB {
        return this.pingbiciDBConfig[ID];
    }
    public all():{[ID:number]: pingbiciDB} {
        return this.pingbiciDBConfig;
    }
}

// player_namedb
export class player_nameDB {
	ID:any;			//ID
	Text_Name:any;	//Text_Name
	Type:any;		//Type
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.Type = data[idx.Type];
	}
}
export class player_nameDBMgr {
    player_nameDBConfig : {[ID:number]: player_nameDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.player_nameDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.player_nameDBConfig[data[i][idx.ID]] = new player_nameDB(data[i], idx);
        }
    }
    public get(ID:number):player_nameDB {
        return this.player_nameDBConfig[ID];
    }
    public all():{[ID:number]: player_nameDB} {
        return this.player_nameDBConfig;
    }
}

// prisonerdb
export class prisonerDB {
	ID:any;					//ID
	Consume:any;			//Consume
	MaxFightCount:any;		//MaxFightCount
	Text_NamePath:any;		//NamePath
	NpcId:any;				//NpcId
	PrisonerId:any;			//PrisonerId
	Text_PrisonerName:any;	//Text_PrisonerName
	Anim_Type:any;			//JSON_PrisonerPath
	Reward:any;				//Reward
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Consume = data[idx.Consume];
		this.MaxFightCount = data[idx.MaxFightCount];
		this.Text_NamePath = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_NamePath] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_NamePath]).Name);
		this.NpcId = data[idx.NpcId];
		this.PrisonerId = data[idx.PrisonerId];
		this.Text_PrisonerName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_PrisonerName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_PrisonerName]).Name);
		this.Anim_Type = data[idx.Anim_Type];
		this.Reward = data[idx.Reward];
	}
}
export class prisonerDBMgr {
    prisonerDBConfig : {[ID:number]: prisonerDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.prisonerDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.prisonerDBConfig[data[i][idx.ID]] = new prisonerDB(data[i], idx);
        }
    }
    public get(ID:number):prisonerDB {
        return this.prisonerDBConfig[ID];
    }
    public all():{[ID:number]: prisonerDB} {
        return this.prisonerDBConfig;
    }
}

// propertydb
export class propertyDB {
	ID:any;		//ID
	value:any;	//value
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.value = data[idx.value];
	}
}
export class propertyDBMgr {
    propertyDBConfig : {[ID:number]: propertyDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.propertyDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.propertyDBConfig[data[i][idx.ID]] = new propertyDB(data[i], idx);
        }
    }
    public get(ID:number):propertyDB {
        return this.propertyDBConfig[ID];
    }
    public all():{[ID:number]: propertyDB} {
        return this.propertyDBConfig;
    }
}

// recharge_productdb
export class recharge_productDB {
	ID:any;				//ID
	Id:any;				//Id
	PlatformId:any;		//PlatformId
	subType:any;		//subType
	Text_Name:any;		//Text_Name
	IconPath:any;		//IconPath
	Gold:any;			//Gold
	ExtraGold:any;		//ExtraGold
	Currency:any;		//Currency
	Symbol:any;			//Symbol
	Money:any;			//Money
	ProductId:any;		//ProductId
	ProductDesc:any;	//ProductDesc
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Id = data[idx.Id];
		this.PlatformId = data[idx.PlatformId];
		this.subType = data[idx.subType];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.IconPath = data[idx.IconPath];
		this.Gold = data[idx.Gold];
		this.ExtraGold = data[idx.ExtraGold];
		this.Currency = data[idx.Currency];
		this.Symbol = data[idx.Symbol];
		this.Money = data[idx.Money];
		this.ProductId = data[idx.ProductId];
		this.ProductDesc = data[idx.ProductDesc];
	}
}
export class recharge_productDBMgr {
    recharge_productDBConfig : {[ID:number]: recharge_productDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.recharge_productDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.recharge_productDBConfig[data[i][idx.ID]] = new recharge_productDB(data[i], idx);
        }
    }
    public get(ID:number):recharge_productDB {
        return this.recharge_productDBConfig[ID];
    }
    public all():{[ID:number]: recharge_productDB} {
        return this.recharge_productDBConfig;
    }
}

// rewarddb
export class rewardDB {
	ID:any;			//ID
	JSON_Award:any;	//JSON_Award
	JSON_Rate:any;	//JSON_Rate
	RateType:any;	//RateType
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.JSON_Award = data[idx.JSON_Award];
		this.JSON_Rate = data[idx.JSON_Rate];
		this.RateType = data[idx.RateType];
	}
}
export class rewardDBMgr {
    rewardDBConfig : {[ID:number]: rewardDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.rewardDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.rewardDBConfig[data[i][idx.ID]] = new rewardDB(data[i], idx);
        }
    }
    public get(ID:number):rewardDB {
        return this.rewardDBConfig[ID];
    }
    public all():{[ID:number]: rewardDB} {
        return this.rewardDBConfig;
    }
}

// reward_icondb
export class reward_iconDB {
	ID:any;			//ID
	Type:any;		//Type
	Attribute:any;	//Attribute
	Text_Desc:any;	//Text_Desc
	ItemId:any;		//ItemId
	ValueType:any;	//ValueType
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Type = data[idx.Type];
		this.Attribute = data[idx.Attribute];
		this.Text_Desc = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Desc] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Desc]).Name);
		this.ItemId = data[idx.ItemId];
		this.ValueType = data[idx.ValueType];
	}
}
export class reward_iconDBMgr {
    reward_iconDBConfig : {[ID:number]: reward_iconDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.reward_iconDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.reward_iconDBConfig[data[i][idx.ID]] = new reward_iconDB(data[i], idx);
        }
    }
    public get(ID:number):reward_iconDB {
        return this.reward_iconDBConfig[ID];
    }
    public all():{[ID:number]: reward_iconDB} {
        return this.reward_iconDBConfig;
    }
}

// rolldb
export class rollDB {
	ID:any;				//ID
	ActId:any;			//ActId
	JSON_Award:any;		//JSON_Award
	JSON_Rate:any;		//JSON_Rate
	RateType:any;		//RateType
	JSON_Consume:any;	//JSON_Consume
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.ActId = data[idx.ActId];
		this.JSON_Award = data[idx.JSON_Award];
		this.JSON_Rate = data[idx.JSON_Rate];
		this.RateType = data[idx.RateType];
		this.JSON_Consume = data[idx.JSON_Consume];
	}
}
export class rollDBMgr {
    rollDBConfig : {[ID:number]: rollDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.rollDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.rollDBConfig[data[i][idx.ID]] = new rollDB(data[i], idx);
        }
    }
    public get(ID:number):rollDB {
        return this.rollDBConfig[ID];
    }
    public all():{[ID:number]: rollDB} {
        return this.rollDBConfig;
    }
}

// rule_descdb
export class rule_descDB {
	ID:any;			//ID
	Address:any;	//Address
	Text_Desc:any;	//Text_Desc
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Address = data[idx.Address];
		this.Text_Desc = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Desc] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Desc]).Name);
	}
}
export class rule_descDBMgr {
    rule_descDBConfig : {[ID:number]: rule_descDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.rule_descDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.rule_descDBConfig[data[i][idx.ID]] = new rule_descDB(data[i], idx);
        }
    }
    public get(ID:number):rule_descDB {
        return this.rule_descDBConfig[ID];
    }
    public all():{[ID:number]: rule_descDB} {
        return this.rule_descDBConfig;
    }
}

// scene_bgmdb
export class scene_bgmDB {
	ID:any;			//ID
	BgmAddress:any;	//BgmAddress
	SceneName:any;	//SceneName
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BgmAddress = data[idx.BgmAddress];
		this.SceneName = data[idx.SceneName];
	}
}
export class scene_bgmDBMgr {
    scene_bgmDBConfig : {[ID:number]: scene_bgmDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.scene_bgmDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.scene_bgmDBConfig[data[i][idx.ID]] = new scene_bgmDB(data[i], idx);
        }
    }
    public get(ID:number):scene_bgmDB {
        return this.scene_bgmDBConfig[ID];
    }
    public all():{[ID:number]: scene_bgmDB} {
        return this.scene_bgmDBConfig;
    }
}

// searchdb
export class searchDB {
	ID:any;				//ID
	BeautyId:any;		//BeautyId
	BuildId:any;		//BuildId
	Text_Dialog1:any;	//Text_Dialog1
	Text_Dialog2:any;	//Text_Dialog2
	SearchId:any;		//SearchId
	SearchType:any;		//SearchType
	RoleId:any;			//RoleId
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BeautyId = data[idx.BeautyId];
		this.BuildId = data[idx.BuildId];
		this.Text_Dialog1 = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Dialog1] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Dialog1]).Name);
		this.Text_Dialog2 = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Dialog2] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Dialog2]).Name);
		this.SearchId = data[idx.SearchId];
		this.SearchType = data[idx.SearchType];
		this.RoleId = data[idx.RoleId];
	}
}
export class searchDBMgr {
    searchDBConfig : {[ID:number]: searchDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.searchDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.searchDBConfig[data[i][idx.ID]] = new searchDB(data[i], idx);
        }
    }
    public get(ID:number):searchDB {
        return this.searchDBConfig[ID];
    }
    public all():{[ID:number]: searchDB} {
        return this.searchDBConfig;
    }
}

// search_builddb
export class search_buildDB {
	ID:any;				//ID
	ArtFont:any;		//ArtFont
	BuildId:any;		//BuildId
	Text_BuildName:any;	//Text_BuildName
	Image:any;			//Image
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.ArtFont = data[idx.ArtFont];
		this.BuildId = data[idx.BuildId];
		this.Text_BuildName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_BuildName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_BuildName]).Name);
		this.Image = data[idx.Image];
	}
}
export class search_buildDBMgr {
    search_buildDBConfig : {[ID:number]: search_buildDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.search_buildDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.search_buildDBConfig[data[i][idx.ID]] = new search_buildDB(data[i], idx);
        }
    }
    public get(ID:number):search_buildDB {
        return this.search_buildDBConfig[ID];
    }
    public all():{[ID:number]: search_buildDB} {
        return this.search_buildDBConfig;
    }
}

// search_build_infodb
export class search_build_infoDB {
	ID:any;				//ID
	BuildId:any;		//BuildId
	RoleId:any;			//RoleId
	RoleIndex:any;		//RoleIndex
	BeautyId:any;		//BeautyId
	Text_ElseInfo:any;	//Text_ElseInfo
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BuildId = data[idx.BuildId];
		this.RoleId = data[idx.RoleId];
		this.RoleIndex = data[idx.RoleIndex];
		this.BeautyId = data[idx.BeautyId];
		this.Text_ElseInfo = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_ElseInfo] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_ElseInfo]).Name);
	}
}
export class search_build_infoDBMgr {
    search_build_infoDBConfig : {[ID:number]: search_build_infoDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.search_build_infoDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.search_build_infoDBConfig[data[i][idx.ID]] = new search_build_infoDB(data[i], idx);
        }
    }
    public get(ID:number):search_build_infoDB {
        return this.search_build_infoDBConfig[ID];
    }
    public all():{[ID:number]: search_build_infoDB} {
        return this.search_build_infoDBConfig;
    }
}

// search_rewarddb
export class search_rewardDB {
	ID:any;				//ID
	SearchType:any;		//SearchType
	RewardId:any;		//RewardId
	JSON_ConsumeId:any;	//JSON_ConsumeId
	JSON_Rate:any;		//JSON_Rate
	RateType:any;		//RateType
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.SearchType = data[idx.SearchType];
		this.RewardId = data[idx.RewardId];
		this.JSON_ConsumeId = data[idx.JSON_ConsumeId];
		this.JSON_Rate = data[idx.JSON_Rate];
		this.RateType = data[idx.RateType];
	}
}
export class search_rewardDBMgr {
    search_rewardDBConfig : {[ID:number]: search_rewardDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.search_rewardDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.search_rewardDBConfig[data[i][idx.ID]] = new search_rewardDB(data[i], idx);
        }
    }
    public get(ID:number):search_rewardDB {
        return this.search_rewardDBConfig[ID];
    }
    public all():{[ID:number]: search_rewardDB} {
        return this.search_rewardDBConfig;
    }
}

// search_roledb
export class search_roleDB {
	ID:any;				//ID
	Text_BaseInfo:any;	//Text_BaseInfo
	Path:any;			//Path
	Text_RoleName:any;	//Text_RoleName
	Text_RoleTag:any;	//Text_RoleTag
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Text_BaseInfo = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_BaseInfo] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_BaseInfo]).Name);
		this.Path = data[idx.Path];
		this.Text_RoleName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_RoleName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_RoleName]).Name);
		this.Text_RoleTag = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_RoleTag] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_RoleTag]).Name);
	}
}
export class search_roleDBMgr {
    search_roleDBConfig : {[ID:number]: search_roleDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.search_roleDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.search_roleDBConfig[data[i][idx.ID]] = new search_roleDB(data[i], idx);
        }
    }
    public get(ID:number):search_roleDB {
        return this.search_roleDBConfig[ID];
    }
    public all():{[ID:number]: search_roleDB} {
        return this.search_roleDBConfig;
    }
}

// search_typedb
export class search_typeDB {
	ID:any;					//ID
	ChangeLuckConsume:any;	//ChangeLuckConsume
	Beauty:any;				//Beauty
	Reward:any;				//Reward
	Consume:any;			//Consume
	None:any;				//None
	Max:any;				//Max
	Min:any;				//Min
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.ChangeLuckConsume = data[idx.ChangeLuckConsume];
		this.Beauty = data[idx.Beauty];
		this.Reward = data[idx.Reward];
		this.Consume = data[idx.Consume];
		this.None = data[idx.None];
		this.Max = data[idx.Max];
		this.Min = data[idx.Min];
	}
}
export class search_typeDBMgr {
    search_typeDBConfig : {[ID:number]: search_typeDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.search_typeDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.search_typeDBConfig[data[i][idx.ID]] = new search_typeDB(data[i], idx);
        }
    }
    public get(ID:number):search_typeDB {
        return this.search_typeDBConfig[ID];
    }
    public all():{[ID:number]: search_typeDB} {
        return this.search_typeDBConfig;
    }
}

// seat_expanddb
export class seat_expandDB {
	ID:any;			//ID
	Reward:any;		//Reward
	Times:any;		//Times
	Consume:any;	//Consume
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Reward = data[idx.Reward];
		this.Times = data[idx.Times];
		this.Consume = data[idx.Consume];
	}
}
export class seat_expandDBMgr {
    seat_expandDBConfig : {[ID:number]: seat_expandDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.seat_expandDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.seat_expandDBConfig[data[i][idx.ID]] = new seat_expandDB(data[i], idx);
        }
    }
    public get(ID:number):seat_expandDB {
        return this.seat_expandDBConfig[ID];
    }
    public all():{[ID:number]: seat_expandDB} {
        return this.seat_expandDBConfig;
    }
}

// sevensignrewarddb
export class sevensignrewardDB {
	ID:any;				//ID
	NamePath:any;		//NamePath
	JSON_Reward:any;	//JSON_Reward
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.NamePath = data[idx.NamePath];
		this.JSON_Reward = data[idx.JSON_Reward];
	}
}
export class sevensignrewardDBMgr {
    sevensignrewardDBConfig : {[ID:number]: sevensignrewardDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.sevensignrewardDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.sevensignrewardDBConfig[data[i][idx.ID]] = new sevensignrewardDB(data[i], idx);
        }
    }
    public get(ID:number):sevensignrewardDB {
        return this.sevensignrewardDBConfig[ID];
    }
    public all():{[ID:number]: sevensignrewardDB} {
        return this.sevensignrewardDBConfig;
    }
}

// shop_giftdb
export class shop_giftDB {
	ID:any;					//ID
	ShopId:any;				//ShopId
	Text_ProductName:any;	//Text_ProductName
	BuyLimit:any;			//BuyLimit
	TimeType:any;			//时间类型
	StartTime:any;			//StartTime
	EndTime:any;			//EndTime
	LoopDays:any;			//循环周期
	OriginalPrice:any;		//OriginalPrice
	Price:any;				//Price
	JSON_ProductInfo:any;	//JSON_ProductInfo
	ShowSort:any;			//ShowSort
	JSON_Stype:any;			//JSON_Stype
	Type:any;				//Type
	VipLimit:any;			//VipLimit
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.ShopId = data[idx.ShopId];
		this.Text_ProductName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_ProductName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_ProductName]).Name);
		this.BuyLimit = data[idx.BuyLimit];
		this.TimeType = data[idx.TimeType];
		this.StartTime = data[idx.StartTime];
		this.EndTime = data[idx.EndTime];
		this.LoopDays = data[idx.LoopDays];
		this.OriginalPrice = data[idx.OriginalPrice];
		this.Price = data[idx.Price];
		this.JSON_ProductInfo = data[idx.JSON_ProductInfo];
		this.ShowSort = data[idx.ShowSort];
		this.JSON_Stype = data[idx.JSON_Stype];
		this.Type = data[idx.Type];
		this.VipLimit = data[idx.VipLimit];
	}
}
export class shop_giftDBMgr {
    shop_giftDBConfig : {[ID:number]: shop_giftDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.shop_giftDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.shop_giftDBConfig[data[i][idx.ID]] = new shop_giftDB(data[i], idx);
        }
    }
    public get(ID:number):shop_giftDB {
        return this.shop_giftDBConfig[ID];
    }
    public all():{[ID:number]: shop_giftDB} {
        return this.shop_giftDBConfig;
    }
}

// silk_roaddb
export class silk_roadDB {
	ID:any;				//ID
	Brain:any;			//Brain
	LevelId:any;		//LevelId
	Money:any;			//Money
	RewardId:any;		//RewardId
	Text_StageName:any;	//Text_StageName
	StateId:any;		//StateId
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Brain = data[idx.Brain];
		this.LevelId = data[idx.LevelId];
		this.Money = data[idx.Money];
		this.RewardId = data[idx.RewardId];
		this.Text_StageName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_StageName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_StageName]).Name);
		this.StateId = data[idx.StateId];
	}
}
export class silk_roadDBMgr {
    silk_roadDBConfig : {[ID:number]: silk_roadDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.silk_roadDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.silk_roadDBConfig[data[i][idx.ID]] = new silk_roadDB(data[i], idx);
        }
    }
    public get(ID:number):silk_roadDB {
        return this.silk_roadDBConfig[ID];
    }
    public all():{[ID:number]: silk_roadDB} {
        return this.silk_roadDBConfig;
    }
}

// silk_road_pathdb
export class silk_road_pathDB {
	ID:any;					//ID
	posId:any;				//id1
	MapId:any;				//MapId
	JSON_PathPoints:any;	//JSON_PathPoints
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.posId = data[idx.posId];
		this.MapId = data[idx.MapId];
		this.JSON_PathPoints = data[idx.JSON_PathPoints];
	}
}
export class silk_road_pathDBMgr {
    silk_road_pathDBConfig : {[ID:number]: silk_road_pathDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.silk_road_pathDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.silk_road_pathDBConfig[data[i][idx.ID]] = new silk_road_pathDB(data[i], idx);
        }
    }
    public get(ID:number):silk_road_pathDB {
        return this.silk_road_pathDBConfig[ID];
    }
    public all():{[ID:number]: silk_road_pathDB} {
        return this.silk_road_pathDBConfig;
    }
}

// silk_road_posdb
export class silk_road_posDB {
	ID:any;			//ID
	MapId:any;		//MapId
	JSON_Pos:any;	//JSON_Pos
	PosId:any;		//PosId
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.MapId = data[idx.MapId];
		this.JSON_Pos = data[idx.JSON_Pos];
		this.PosId = data[idx.PosId];
	}
}
export class silk_road_posDBMgr {
    silk_road_posDBConfig : {[ID:number]: silk_road_posDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.silk_road_posDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.silk_road_posDBConfig[data[i][idx.ID]] = new silk_road_posDB(data[i], idx);
        }
    }
    public get(ID:number):silk_road_posDB {
        return this.silk_road_posDBConfig[ID];
    }
    public all():{[ID:number]: silk_road_posDB} {
        return this.silk_road_posDBConfig;
    }
}

// silk_road_statedb
export class silk_road_stateDB {
	ID:any;				//ID
	JSON_CityId:any;	//JSON_CityId
	MapBg:any;			//MapBg
	PosId:any;			//PosId
	StateId:any;		//StateId
	Text_StateName:any;	//Text_StateName
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.JSON_CityId = data[idx.JSON_CityId];
		this.MapBg = data[idx.MapBg];
		this.PosId = data[idx.PosId];
		this.StateId = data[idx.StateId];
		this.Text_StateName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_StateName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_StateName]).Name);
	}
}
export class silk_road_stateDBMgr {
    silk_road_stateDBConfig : {[ID:number]: silk_road_stateDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.silk_road_stateDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.silk_road_stateDBConfig[data[i][idx.ID]] = new silk_road_stateDB(data[i], idx);
        }
    }
    public get(ID:number):silk_road_stateDB {
        return this.silk_road_stateDBConfig[ID];
    }
    public all():{[ID:number]: silk_road_stateDB} {
        return this.silk_road_stateDBConfig;
    }
}

// skilldb
export class skillDB {
	ID:any;				//ID
	Text_Desc:any;		//Text_Desc
	DesignFormulas:any;	//DesignFormulas
	IntitalValue:any;	//IntitalValue
	SkillIcon:any;		//SkillIcon
	Text_SkillName:any;	//Text_SkillName
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Text_Desc = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Desc] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Desc]).Name);
		this.DesignFormulas = data[idx.DesignFormulas];
		this.IntitalValue = data[idx.IntitalValue];
		this.SkillIcon = data[idx.SkillIcon];
		this.Text_SkillName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_SkillName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_SkillName]).Name);
	}
}
export class skillDBMgr {
    skillDBConfig : {[ID:number]: skillDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.skillDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.skillDBConfig[data[i][idx.ID]] = new skillDB(data[i], idx);
        }
    }
    public get(ID:number):skillDB {
        return this.skillDBConfig[ID];
    }
    public all():{[ID:number]: skillDB} {
        return this.skillDBConfig;
    }
}

// skill_lv_updb
export class skill_lv_upDB {
	ID:any;				//ID
	NeedExpSkill1:any;	//NeedExpSkill1
	NeedExpSkill2:any;	//NeedExpSkill2
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.NeedExpSkill1 = data[idx.NeedExpSkill1];
		this.NeedExpSkill2 = data[idx.NeedExpSkill2];
	}
}
export class skill_lv_upDBMgr {
    skill_lv_upDBConfig : {[ID:number]: skill_lv_upDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.skill_lv_upDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.skill_lv_upDBConfig[data[i][idx.ID]] = new skill_lv_upDB(data[i], idx);
        }
    }
    public get(ID:number):skill_lv_upDB {
        return this.skill_lv_upDBConfig[ID];
    }
    public all():{[ID:number]: skill_lv_upDB} {
        return this.skill_lv_upDBConfig;
    }
}

// specialherodb
export class specialheroDB {
	ID:any;			//ID
	BgPath:any;		//BgPath
	Consume:any;	//Consume
	Type:any;		//Type
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BgPath = data[idx.BgPath];
		this.Consume = data[idx.Consume];
		this.Type = data[idx.Type];
	}
}
export class specialheroDBMgr {
    specialheroDBConfig : {[ID:number]: specialheroDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.specialheroDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.specialheroDBConfig[data[i][idx.ID]] = new specialheroDB(data[i], idx);
        }
    }
    public get(ID:number):specialheroDB {
        return this.specialheroDBConfig[ID];
    }
    public all():{[ID:number]: specialheroDB} {
        return this.specialheroDBConfig;
    }
}

// stagedb
export class stageDB {
	ID:any;				//ID
	Text_StageName:any;	//Text_StageName
	LevelId:any;		//LevelId
	StageId:any;		//StageId
	Progress:any;		//Progress
	BgId:any;			//BgId
	DialogId:any;		//DialogId
	Force:any;			//Force
	IsBoss:any;			//IsBoss
	RewardId:any;		//RewardId
	Soldier:any;		//Soldier
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Text_StageName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_StageName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_StageName]).Name);
		this.LevelId = data[idx.LevelId];
		this.StageId = data[idx.StageId];
		this.Progress = data[idx.Progress];
		this.BgId = data[idx.BgId];
		this.DialogId = data[idx.DialogId];
		this.Force = data[idx.Force];
		this.IsBoss = data[idx.IsBoss];
		this.RewardId = data[idx.RewardId];
		this.Soldier = data[idx.Soldier];
	}
}
export class stageDBMgr {
    stageDBConfig : {[ID:number]: stageDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.stageDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.stageDBConfig[data[i][idx.ID]] = new stageDB(data[i], idx);
        }
    }
    public get(ID:number):stageDB {
        return this.stageDBConfig[ID];
    }
    public all():{[ID:number]: stageDB} {
        return this.stageDBConfig;
    }
}

// stage_posdb
export class stage_posDB {
	ID:any;			//ID
	BgId:any;		//BgId
	BgPath:any;		//BgPath
	JSON_Pos1:any;	//JSON_Pos1
	JSON_Pos2:any;	//JSON_Pos2
	JSON_Pos3:any;	//JSON_Pos3
	JSON_Pos4:any;	//JSON_Pos4
	JSON_Pos5:any;	//JSON_Pos5
	JSON_Pos6:any;	//JSON_Pos6
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BgId = data[idx.BgId];
		this.BgPath = data[idx.BgPath];
		this.JSON_Pos1 = data[idx.JSON_Pos1];
		this.JSON_Pos2 = data[idx.JSON_Pos2];
		this.JSON_Pos3 = data[idx.JSON_Pos3];
		this.JSON_Pos4 = data[idx.JSON_Pos4];
		this.JSON_Pos5 = data[idx.JSON_Pos5];
		this.JSON_Pos6 = data[idx.JSON_Pos6];
	}
}
export class stage_posDBMgr {
    stage_posDBConfig : {[ID:number]: stage_posDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.stage_posDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.stage_posDBConfig[data[i][idx.ID]] = new stage_posDB(data[i], idx);
        }
    }
    public get(ID:number):stage_posDB {
        return this.stage_posDBConfig[ID];
    }
    public all():{[ID:number]: stage_posDB} {
        return this.stage_posDBConfig;
    }
}

// taofa_infodb
export class taofa_infoDB {
	ID:any;			//ID
	BgId:any;		//BgId
	Force:any;		//Force
	Soldier:any;	//Soldier
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BgId = data[idx.BgId];
		this.Force = data[idx.Force];
		this.Soldier = data[idx.Soldier];
	}
}
export class taofa_infoDBMgr {
    taofa_infoDBConfig : {[ID:number]: taofa_infoDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.taofa_infoDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.taofa_infoDBConfig[data[i][idx.ID]] = new taofa_infoDB(data[i], idx);
        }
    }
    public get(ID:number):taofa_infoDB {
        return this.taofa_infoDBConfig[ID];
    }
    public all():{[ID:number]: taofa_infoDB} {
        return this.taofa_infoDBConfig;
    }
}

// taofa_npc_rewarddb
export class taofa_npc_rewardDB {
	ID:any;				//ID
	BaseReward:any;		//BaseReward
	LevelEnd:any;		//LevelEnd
	NpcType:any;		//NpcType
	JSON_Reward:any;	//JSON_Reward
	HeroReward:any;		//HeroReward
	BeautyReward:any;	//BeautyReward
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.BaseReward = data[idx.BaseReward];
		this.LevelEnd = data[idx.LevelEnd];
		this.NpcType = data[idx.NpcType];
		this.JSON_Reward = data[idx.JSON_Reward];
		this.HeroReward = data[idx.HeroReward];
		this.BeautyReward = data[idx.BeautyReward];
	}
}
export class taofa_npc_rewardDBMgr {
    taofa_npc_rewardDBConfig : {[ID:number]: taofa_npc_rewardDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.taofa_npc_rewardDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.taofa_npc_rewardDBConfig[data[i][idx.ID]] = new taofa_npc_rewardDB(data[i], idx);
        }
    }
    public get(ID:number):taofa_npc_rewardDB {
        return this.taofa_npc_rewardDBConfig[ID];
    }
    public all():{[ID:number]: taofa_npc_rewardDB} {
        return this.taofa_npc_rewardDBConfig;
    }
}

// taskdb
export class taskDB {
	ID:any;				//ID
	Category:any;		//Category
	TaskId:any;			//TaskId
	TaskType:any;		//TaskType
	Text_TaskName:any;	//Text_TaskName
	Text_TaskDec:any;	//Text_TaskDec
	Item_ID:any;		//Item_ID
	Item_Value:any;		//Item_Value
	JSON_Target:any;	//JSON_Target
	JSON_UserData:any;	//JSON_UserData
	Reward:any;			//Reward
	SwitchScene:any;	//SwitchScene
	IconName:any;		//IconName
	BgPath:any;			//BgPath
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Category = data[idx.Category];
		this.TaskId = data[idx.TaskId];
		this.TaskType = data[idx.TaskType];
		this.Text_TaskName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_TaskName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_TaskName]).Name);
		this.Text_TaskDec = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_TaskDec] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_TaskDec]).Name);
		this.Item_ID = data[idx.Item_ID];
		this.Item_Value = data[idx.Item_Value];
		this.JSON_Target = data[idx.JSON_Target];
		this.JSON_UserData = data[idx.JSON_UserData];
		this.Reward = data[idx.Reward];
		this.SwitchScene = data[idx.SwitchScene];
		this.IconName = data[idx.IconName];
		this.BgPath = data[idx.BgPath];
	}
}
export class taskDBMgr {
    taskDBConfig : {[ID:number]: taskDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.taskDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.taskDBConfig[data[i][idx.ID]] = new taskDB(data[i], idx);
        }
    }
    public get(ID:number):taskDB {
        return this.taskDBConfig[ID];
    }
    public all():{[ID:number]: taskDB} {
        return this.taskDBConfig;
    }
}

// vipdb
export class vipDB {
	ID:any;					//ID
	ChildRate:any;			//生娃概率
	FastUpgrade:any;		//快速升级
	FinishLearning:any;		//学院升级
	FreeChangeLuck:any;		//私房转运
	InstitutePassword:any;	//翰林院密码
	MaxBeautyEnergy:any;	//随机传召精力上限
	MaxChildEnergy:any;		//子嗣活力上限
	MaxMiracle:any;			//神迹每日次数
	MaxPhysical:any;		//私房体力上限
	MaxRecharge:any;		//充值上限
	MinRecharge:any;		//充值下限
	VipLv:any;				//等级
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.ChildRate = data[idx.ChildRate];
		this.FastUpgrade = data[idx.FastUpgrade];
		this.FinishLearning = data[idx.FinishLearning];
		this.FreeChangeLuck = data[idx.FreeChangeLuck];
		this.InstitutePassword = data[idx.InstitutePassword];
		this.MaxBeautyEnergy = data[idx.MaxBeautyEnergy];
		this.MaxChildEnergy = data[idx.MaxChildEnergy];
		this.MaxMiracle = data[idx.MaxMiracle];
		this.MaxPhysical = data[idx.MaxPhysical];
		this.MaxRecharge = data[idx.MaxRecharge];
		this.MinRecharge = data[idx.MinRecharge];
		this.VipLv = data[idx.VipLv];
	}
}
export class vipDBMgr {
    vipDBConfig : {[ID:number]: vipDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.vipDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.vipDBConfig[data[i][idx.ID]] = new vipDB(data[i], idx);
        }
    }
    public get(ID:number):vipDB {
        return this.vipDBConfig[ID];
    }
    public all():{[ID:number]: vipDB} {
        return this.vipDBConfig;
    }
}

// thronedb
export class throneDB {
	ID:any;				//ID
	ClothPath:any;		//ClothPath
	ContinuedTime:any;	//ContinuedTime
	FontPath:any;		//FontPath
	Text_Name:any;		//Text_Name
	NameFontPath:any;	//NameFontPath
	ThroneLv:any;		//ThroneLv
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.ClothPath = data[idx.ClothPath];
		this.ContinuedTime = data[idx.ContinuedTime];
		this.FontPath = data[idx.FontPath];
		this.Text_Name = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_Name] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_Name]).Name);
		this.NameFontPath = data[idx.NameFontPath];
		this.ThroneLv = data[idx.ThroneLv];
	}
}
export class throneDBMgr {
    throneDBConfig : {[ID:number]: throneDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.throneDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.throneDBConfig[data[i][idx.ID]] = new throneDB(data[i], idx);
        }
    }
    public get(ID:number):throneDB {
        return this.throneDBConfig[ID];
    }
    public all():{[ID:number]: throneDB} {
        return this.throneDBConfig;
    }
}

// titledb
export class titleDB {
	ID:any;				//ID
	MaxBookLv:any;		//MaxBookLv
	MaxHeroLv:any;		//MaxHeroLv
	Text_TitleName:any;	//Text_TitleName
	Consume:any;		//Consume
	Reward:any;			//Reward
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.MaxBookLv = data[idx.MaxBookLv];
		this.MaxHeroLv = data[idx.MaxHeroLv];
		this.Text_TitleName = !ConfigMgr.getInstance().textdb ? '' : (!data[idx.Text_TitleName] ? '' : ConfigMgr.getInstance().textdb.get(data[idx.Text_TitleName]).Name);
		this.Consume = data[idx.Consume];
		this.Reward = data[idx.Reward];
	}
}
export class titleDBMgr {
    titleDBConfig : {[ID:number]: titleDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.titleDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.titleDBConfig[data[i][idx.ID]] = new titleDB(data[i], idx);
        }
    }
    public get(ID:number):titleDB {
        return this.titleDBConfig[ID];
    }
    public all():{[ID:number]: titleDB} {
        return this.titleDBConfig;
    }
}

// textdb
export class textDB {
	ID:any;		//ID
	Name:any;	//名称
	constructor(data, idx) {
		this.ID = data[idx.ID];
		this.Name = data[idx.Name];
	}
}
export class textDBMgr {
    textDBConfig : {[ID:number]: textDB} = {};
    constructor() {
    }
    public load(data:any) {
        this.textDBConfig = {};
        if(data.length === 0) {
            return ;
        }
        let idx:any = {};
        for(let i = 0; i < data[0].length; i++) {
            idx[data[0][i]] = i;
        }
        for(let i = 1; i < data.length; i++) {
            this.textDBConfig[data[i][idx.ID]] = new textDB(data[i], idx);
        }
    }
    public get(ID:number):textDB {
        return this.textDBConfig[ID];
    }
    public all():{[ID:number]: textDB} {
        return this.textDBConfig;
    }
}

//********** footer **********//
export class ConfigMgr {
	activitydb:activityDBMgr = null;
	activity_rankdb:activity_rankDBMgr = null;
	activity_taskdb:activity_taskDBMgr = null;
	approvedb:approveDBMgr = null;
	approve_resultdb:approve_resultDBMgr = null;
	approve_typedb:approve_typeDBMgr = null;
	banquet_exchangedb:banquet_exchangeDBMgr = null;
	banquet_joindb:banquet_joinDBMgr = null;
	banquet_typedb:banquet_typeDBMgr = null;
	beautydb:beautyDBMgr = null;
	beauty_dialogdb:beauty_dialogDBMgr = null;
	beauty_skilldb:beauty_skillDBMgr = null;
	beauty_skill_updb:beauty_skill_upDBMgr = null;
	beauty_titledb:beauty_titleDBMgr = null;
	bookdb:bookDBMgr = null;
	book_star_updb:book_star_upDBMgr = null;
	btn_effectdb:btn_effectDBMgr = null;
	cabinetdb:cabinetDBMgr = null;
	cabinet_rewarddb:cabinet_rewardDBMgr = null;
	child_aptitudedb:child_aptitudeDBMgr = null;
	child_aptitude_makedb:child_aptitude_makeDBMgr = null;
	child_infodb:child_infoDBMgr = null;
	child_lv_updb:child_lv_upDBMgr = null;
	child_seatdb:child_seatDBMgr = null;
	child_typedb:child_typeDBMgr = null;
	consumedb:consumeDBMgr = null;
	debate_buffdb:debate_buffDBMgr = null;
	dialog_infodb:dialog_infoDBMgr = null;
	error_code_infodb:error_code_infoDBMgr = null;
	fb_exchangedb:fb_exchangeDBMgr = null;
	fb_rebelliondb:fb_rebellionDBMgr = null;
	fb_worldbossdb:fb_worldbossDBMgr = null;
	guidedb:guideDBMgr = null;
	guide_cmddb:guide_cmdDBMgr = null;
	guide_dialogdb:guide_dialogDBMgr = null;
	guild_bossdb:guild_bossDBMgr = null;
	guild_builddb:guild_buildDBMgr = null;
	guild_exchangedb:guild_exchangeDBMgr = null;
	guild_exchange_itemdb:guild_exchange_itemDBMgr = null;
	guild_lvdb:guild_lvDBMgr = null;
	guild_officedb:guild_officeDBMgr = null;
	halo_adb:halo_aDBMgr = null;
	halo_bdb:halo_bDBMgr = null;
	halo_b_updb:halo_b_upDBMgr = null;
	hanlin_bookdb:hanlin_bookDBMgr = null;
	harvest_relative_activity_shopdb:harvest_relative_activity_shopDBMgr = null;
	herodb:heroDBMgr = null;
	hero_lv_updb:hero_lv_upDBMgr = null;
	itemdb:itemDBMgr = null;
	item_compounddb:item_compoundDBMgr = null;
	leveldb:levelDBMgr = null;
	level_progress_additiondb:level_progress_additionDBMgr = null;
	miracledb:miracleDBMgr = null;
	module_opendb:module_openDBMgr = null;
	notice_activitydb:notice_activityDBMgr = null;
	npcdb:npcDBMgr = null;
	officedb:officeDBMgr = null;
	pingbicidb:pingbiciDBMgr = null;
	player_namedb:player_nameDBMgr = null;
	prisonerdb:prisonerDBMgr = null;
	propertydb:propertyDBMgr = null;
	recharge_productdb:recharge_productDBMgr = null;
	rewarddb:rewardDBMgr = null;
	reward_icondb:reward_iconDBMgr = null;
	rolldb:rollDBMgr = null;
	rule_descdb:rule_descDBMgr = null;
	scene_bgmdb:scene_bgmDBMgr = null;
	searchdb:searchDBMgr = null;
	search_builddb:search_buildDBMgr = null;
	search_build_infodb:search_build_infoDBMgr = null;
	search_rewarddb:search_rewardDBMgr = null;
	search_roledb:search_roleDBMgr = null;
	search_typedb:search_typeDBMgr = null;
	seat_expanddb:seat_expandDBMgr = null;
	sevensignrewarddb:sevensignrewardDBMgr = null;
	shop_giftdb:shop_giftDBMgr = null;
	silk_roaddb:silk_roadDBMgr = null;
	silk_road_pathdb:silk_road_pathDBMgr = null;
	silk_road_posdb:silk_road_posDBMgr = null;
	silk_road_statedb:silk_road_stateDBMgr = null;
	skilldb:skillDBMgr = null;
	skill_lv_updb:skill_lv_upDBMgr = null;
	specialherodb:specialheroDBMgr = null;
	stagedb:stageDBMgr = null;
	stage_posdb:stage_posDBMgr = null;
	taofa_infodb:taofa_infoDBMgr = null;
	taofa_npc_rewarddb:taofa_npc_rewardDBMgr = null;
	taskdb:taskDBMgr = null;
	vipdb:vipDBMgr = null;
	thronedb:throneDBMgr = null;
	titledb:titleDBMgr = null;
	textdb:textDBMgr = null;
	static instance:ConfigMgr;
	public static getInstance() {
		if(!this.instance) {
			this.instance = new ConfigMgr();
		}
		return this.instance;
	}
	public loadAllConfig(jsonDir) {
		let contents, json;

		/// textdb
        try {
            contents = fs.readFileSync(jsonDir + 'textdb.json');
            json = JSON.parse(contents);
            this.textdb = new textDBMgr();
            this.textdb.load(json);
        } catch (err) {
            throw new Error('textdb.json read failed');
        }
		/// activitydb
        try {
            contents = fs.readFileSync(jsonDir + 'activitydb.json');
            json = JSON.parse(contents);
            this.activitydb = new activityDBMgr();
            this.activitydb.load(json);
        } catch (err) {
            throw new Error('activitydb.json read failed');
        }
		/// activity_rankdb
        try {
            contents = fs.readFileSync(jsonDir + 'activity_rankdb.json');
            json = JSON.parse(contents);
            this.activity_rankdb = new activity_rankDBMgr();
            this.activity_rankdb.load(json);
        } catch (err) {
            throw new Error('activity_rankdb.json read failed');
        }
		/// activity_taskdb
        try {
            contents = fs.readFileSync(jsonDir + 'activity_taskdb.json');
            json = JSON.parse(contents);
            this.activity_taskdb = new activity_taskDBMgr();
            this.activity_taskdb.load(json);
        } catch (err) {
            throw new Error('activity_taskdb.json read failed');
        }
		/// approvedb
        try {
            contents = fs.readFileSync(jsonDir + 'approvedb.json');
            json = JSON.parse(contents);
            this.approvedb = new approveDBMgr();
            this.approvedb.load(json);
        } catch (err) {
            throw new Error('approvedb.json read failed');
        }
		/// approve_resultdb
        try {
            contents = fs.readFileSync(jsonDir + 'approve_resultdb.json');
            json = JSON.parse(contents);
            this.approve_resultdb = new approve_resultDBMgr();
            this.approve_resultdb.load(json);
        } catch (err) {
            throw new Error('approve_resultdb.json read failed');
        }
		/// approve_typedb
        try {
            contents = fs.readFileSync(jsonDir + 'approve_typedb.json');
            json = JSON.parse(contents);
            this.approve_typedb = new approve_typeDBMgr();
            this.approve_typedb.load(json);
        } catch (err) {
            throw new Error('approve_typedb.json read failed');
        }
		/// banquet_exchangedb
        try {
            contents = fs.readFileSync(jsonDir + 'banquet_exchangedb.json');
            json = JSON.parse(contents);
            this.banquet_exchangedb = new banquet_exchangeDBMgr();
            this.banquet_exchangedb.load(json);
        } catch (err) {
            throw new Error('banquet_exchangedb.json read failed');
        }
		/// banquet_joindb
        try {
            contents = fs.readFileSync(jsonDir + 'banquet_joindb.json');
            json = JSON.parse(contents);
            this.banquet_joindb = new banquet_joinDBMgr();
            this.banquet_joindb.load(json);
        } catch (err) {
            throw new Error('banquet_joindb.json read failed');
        }
		/// banquet_typedb
        try {
            contents = fs.readFileSync(jsonDir + 'banquet_typedb.json');
            json = JSON.parse(contents);
            this.banquet_typedb = new banquet_typeDBMgr();
            this.banquet_typedb.load(json);
        } catch (err) {
            throw new Error('banquet_typedb.json read failed');
        }
		/// beautydb
        try {
            contents = fs.readFileSync(jsonDir + 'beautydb.json');
            json = JSON.parse(contents);
            this.beautydb = new beautyDBMgr();
            this.beautydb.load(json);
        } catch (err) {
            throw new Error('beautydb.json read failed');
        }
		/// beauty_dialogdb
        try {
            contents = fs.readFileSync(jsonDir + 'beauty_dialogdb.json');
            json = JSON.parse(contents);
            this.beauty_dialogdb = new beauty_dialogDBMgr();
            this.beauty_dialogdb.load(json);
        } catch (err) {
            throw new Error('beauty_dialogdb.json read failed');
        }
		/// beauty_skilldb
        try {
            contents = fs.readFileSync(jsonDir + 'beauty_skilldb.json');
            json = JSON.parse(contents);
            this.beauty_skilldb = new beauty_skillDBMgr();
            this.beauty_skilldb.load(json);
        } catch (err) {
            throw new Error('beauty_skilldb.json read failed');
        }
		/// beauty_skill_updb
        try {
            contents = fs.readFileSync(jsonDir + 'beauty_skill_updb.json');
            json = JSON.parse(contents);
            this.beauty_skill_updb = new beauty_skill_upDBMgr();
            this.beauty_skill_updb.load(json);
        } catch (err) {
            throw new Error('beauty_skill_updb.json read failed');
        }
		/// beauty_titledb
        try {
            contents = fs.readFileSync(jsonDir + 'beauty_titledb.json');
            json = JSON.parse(contents);
            this.beauty_titledb = new beauty_titleDBMgr();
            this.beauty_titledb.load(json);
        } catch (err) {
            throw new Error('beauty_titledb.json read failed');
        }
		/// bookdb
        try {
            contents = fs.readFileSync(jsonDir + 'bookdb.json');
            json = JSON.parse(contents);
            this.bookdb = new bookDBMgr();
            this.bookdb.load(json);
        } catch (err) {
            throw new Error('bookdb.json read failed');
        }
		/// book_star_updb
        try {
            contents = fs.readFileSync(jsonDir + 'book_star_updb.json');
            json = JSON.parse(contents);
            this.book_star_updb = new book_star_upDBMgr();
            this.book_star_updb.load(json);
        } catch (err) {
            throw new Error('book_star_updb.json read failed');
        }
		/// btn_effectdb
        try {
            contents = fs.readFileSync(jsonDir + 'btn_effectdb.json');
            json = JSON.parse(contents);
            this.btn_effectdb = new btn_effectDBMgr();
            this.btn_effectdb.load(json);
        } catch (err) {
            throw new Error('btn_effectdb.json read failed');
        }
		/// cabinetdb
        try {
            contents = fs.readFileSync(jsonDir + 'cabinetdb.json');
            json = JSON.parse(contents);
            this.cabinetdb = new cabinetDBMgr();
            this.cabinetdb.load(json);
        } catch (err) {
            throw new Error('cabinetdb.json read failed');
        }
		/// cabinet_rewarddb
        try {
            contents = fs.readFileSync(jsonDir + 'cabinet_rewarddb.json');
            json = JSON.parse(contents);
            this.cabinet_rewarddb = new cabinet_rewardDBMgr();
            this.cabinet_rewarddb.load(json);
        } catch (err) {
            throw new Error('cabinet_rewarddb.json read failed');
        }
		/// child_aptitudedb
        try {
            contents = fs.readFileSync(jsonDir + 'child_aptitudedb.json');
            json = JSON.parse(contents);
            this.child_aptitudedb = new child_aptitudeDBMgr();
            this.child_aptitudedb.load(json);
        } catch (err) {
            throw new Error('child_aptitudedb.json read failed');
        }
		/// child_aptitude_makedb
        try {
            contents = fs.readFileSync(jsonDir + 'child_aptitude_makedb.json');
            json = JSON.parse(contents);
            this.child_aptitude_makedb = new child_aptitude_makeDBMgr();
            this.child_aptitude_makedb.load(json);
        } catch (err) {
            throw new Error('child_aptitude_makedb.json read failed');
        }
		/// child_infodb
        try {
            contents = fs.readFileSync(jsonDir + 'child_infodb.json');
            json = JSON.parse(contents);
            this.child_infodb = new child_infoDBMgr();
            this.child_infodb.load(json);
        } catch (err) {
            throw new Error('child_infodb.json read failed');
        }
		/// child_lv_updb
        try {
            contents = fs.readFileSync(jsonDir + 'child_lv_updb.json');
            json = JSON.parse(contents);
            this.child_lv_updb = new child_lv_upDBMgr();
            this.child_lv_updb.load(json);
        } catch (err) {
            throw new Error('child_lv_updb.json read failed');
        }
		/// child_seatdb
        try {
            contents = fs.readFileSync(jsonDir + 'child_seatdb.json');
            json = JSON.parse(contents);
            this.child_seatdb = new child_seatDBMgr();
            this.child_seatdb.load(json);
        } catch (err) {
            throw new Error('child_seatdb.json read failed');
        }
		/// child_typedb
        try {
            contents = fs.readFileSync(jsonDir + 'child_typedb.json');
            json = JSON.parse(contents);
            this.child_typedb = new child_typeDBMgr();
            this.child_typedb.load(json);
        } catch (err) {
            throw new Error('child_typedb.json read failed');
        }
		/// consumedb
        try {
            contents = fs.readFileSync(jsonDir + 'consumedb.json');
            json = JSON.parse(contents);
            this.consumedb = new consumeDBMgr();
            this.consumedb.load(json);
        } catch (err) {
            throw new Error('consumedb.json read failed');
        }
		/// debate_buffdb
        try {
            contents = fs.readFileSync(jsonDir + 'debate_buffdb.json');
            json = JSON.parse(contents);
            this.debate_buffdb = new debate_buffDBMgr();
            this.debate_buffdb.load(json);
        } catch (err) {
            throw new Error('debate_buffdb.json read failed');
        }
		/// dialog_infodb
        try {
            contents = fs.readFileSync(jsonDir + 'dialog_infodb.json');
            json = JSON.parse(contents);
            this.dialog_infodb = new dialog_infoDBMgr();
            this.dialog_infodb.load(json);
        } catch (err) {
            throw new Error('dialog_infodb.json read failed');
        }
		/// error_code_infodb
        try {
            contents = fs.readFileSync(jsonDir + 'error_code_infodb.json');
            json = JSON.parse(contents);
            this.error_code_infodb = new error_code_infoDBMgr();
            this.error_code_infodb.load(json);
        } catch (err) {
            throw new Error('error_code_infodb.json read failed');
        }
		/// fb_exchangedb
        try {
            contents = fs.readFileSync(jsonDir + 'fb_exchangedb.json');
            json = JSON.parse(contents);
            this.fb_exchangedb = new fb_exchangeDBMgr();
            this.fb_exchangedb.load(json);
        } catch (err) {
            throw new Error('fb_exchangedb.json read failed');
        }
		/// fb_rebelliondb
        try {
            contents = fs.readFileSync(jsonDir + 'fb_rebelliondb.json');
            json = JSON.parse(contents);
            this.fb_rebelliondb = new fb_rebellionDBMgr();
            this.fb_rebelliondb.load(json);
        } catch (err) {
            throw new Error('fb_rebelliondb.json read failed');
        }
		/// fb_worldbossdb
        try {
            contents = fs.readFileSync(jsonDir + 'fb_worldbossdb.json');
            json = JSON.parse(contents);
            this.fb_worldbossdb = new fb_worldbossDBMgr();
            this.fb_worldbossdb.load(json);
        } catch (err) {
            throw new Error('fb_worldbossdb.json read failed');
        }
		/// guidedb
        try {
            contents = fs.readFileSync(jsonDir + 'guidedb.json');
            json = JSON.parse(contents);
            this.guidedb = new guideDBMgr();
            this.guidedb.load(json);
        } catch (err) {
            throw new Error('guidedb.json read failed');
        }
		/// guide_cmddb
        try {
            contents = fs.readFileSync(jsonDir + 'guide_cmddb.json');
            json = JSON.parse(contents);
            this.guide_cmddb = new guide_cmdDBMgr();
            this.guide_cmddb.load(json);
        } catch (err) {
            throw new Error('guide_cmddb.json read failed');
        }
		/// guide_dialogdb
        try {
            contents = fs.readFileSync(jsonDir + 'guide_dialogdb.json');
            json = JSON.parse(contents);
            this.guide_dialogdb = new guide_dialogDBMgr();
            this.guide_dialogdb.load(json);
        } catch (err) {
            throw new Error('guide_dialogdb.json read failed');
        }
		/// guild_bossdb
        try {
            contents = fs.readFileSync(jsonDir + 'guild_bossdb.json');
            json = JSON.parse(contents);
            this.guild_bossdb = new guild_bossDBMgr();
            this.guild_bossdb.load(json);
        } catch (err) {
            throw new Error('guild_bossdb.json read failed');
        }
		/// guild_builddb
        try {
            contents = fs.readFileSync(jsonDir + 'guild_builddb.json');
            json = JSON.parse(contents);
            this.guild_builddb = new guild_buildDBMgr();
            this.guild_builddb.load(json);
        } catch (err) {
            throw new Error('guild_builddb.json read failed');
        }
		/// guild_exchangedb
        try {
            contents = fs.readFileSync(jsonDir + 'guild_exchangedb.json');
            json = JSON.parse(contents);
            this.guild_exchangedb = new guild_exchangeDBMgr();
            this.guild_exchangedb.load(json);
        } catch (err) {
            throw new Error('guild_exchangedb.json read failed');
        }
		/// guild_exchange_itemdb
        try {
            contents = fs.readFileSync(jsonDir + 'guild_exchange_itemdb.json');
            json = JSON.parse(contents);
            this.guild_exchange_itemdb = new guild_exchange_itemDBMgr();
            this.guild_exchange_itemdb.load(json);
        } catch (err) {
            throw new Error('guild_exchange_itemdb.json read failed');
        }
		/// guild_lvdb
        try {
            contents = fs.readFileSync(jsonDir + 'guild_lvdb.json');
            json = JSON.parse(contents);
            this.guild_lvdb = new guild_lvDBMgr();
            this.guild_lvdb.load(json);
        } catch (err) {
            throw new Error('guild_lvdb.json read failed');
        }
		/// guild_officedb
        try {
            contents = fs.readFileSync(jsonDir + 'guild_officedb.json');
            json = JSON.parse(contents);
            this.guild_officedb = new guild_officeDBMgr();
            this.guild_officedb.load(json);
        } catch (err) {
            throw new Error('guild_officedb.json read failed');
        }
		/// halo_adb
        try {
            contents = fs.readFileSync(jsonDir + 'halo_adb.json');
            json = JSON.parse(contents);
            this.halo_adb = new halo_aDBMgr();
            this.halo_adb.load(json);
        } catch (err) {
            throw new Error('halo_adb.json read failed');
        }
		/// halo_bdb
        try {
            contents = fs.readFileSync(jsonDir + 'halo_bdb.json');
            json = JSON.parse(contents);
            this.halo_bdb = new halo_bDBMgr();
            this.halo_bdb.load(json);
        } catch (err) {
            throw new Error('halo_bdb.json read failed');
        }
		/// halo_b_updb
        try {
            contents = fs.readFileSync(jsonDir + 'halo_b_updb.json');
            json = JSON.parse(contents);
            this.halo_b_updb = new halo_b_upDBMgr();
            this.halo_b_updb.load(json);
        } catch (err) {
            throw new Error('halo_b_updb.json read failed');
        }
		/// hanlin_bookdb
        try {
            contents = fs.readFileSync(jsonDir + 'hanlin_bookdb.json');
            json = JSON.parse(contents);
            this.hanlin_bookdb = new hanlin_bookDBMgr();
            this.hanlin_bookdb.load(json);
        } catch (err) {
            throw new Error('hanlin_bookdb.json read failed');
        }
		/// harvest_relative_activity_shopdb
        try {
            contents = fs.readFileSync(jsonDir + 'harvest_relative_activity_shopdb.json');
            json = JSON.parse(contents);
            this.harvest_relative_activity_shopdb = new harvest_relative_activity_shopDBMgr();
            this.harvest_relative_activity_shopdb.load(json);
        } catch (err) {
            throw new Error('harvest_relative_activity_shopdb.json read failed');
        }
		/// herodb
        try {
            contents = fs.readFileSync(jsonDir + 'herodb.json');
            json = JSON.parse(contents);
            this.herodb = new heroDBMgr();
            this.herodb.load(json);
        } catch (err) {
            throw new Error('herodb.json read failed');
        }
		/// hero_lv_updb
        try {
            contents = fs.readFileSync(jsonDir + 'hero_lv_updb.json');
            json = JSON.parse(contents);
            this.hero_lv_updb = new hero_lv_upDBMgr();
            this.hero_lv_updb.load(json);
        } catch (err) {
            throw new Error('hero_lv_updb.json read failed');
        }
		/// itemdb
        try {
            contents = fs.readFileSync(jsonDir + 'itemdb.json');
            json = JSON.parse(contents);
            this.itemdb = new itemDBMgr();
            this.itemdb.load(json);
        } catch (err) {
            throw new Error('itemdb.json read failed');
        }
		/// item_compounddb
        try {
            contents = fs.readFileSync(jsonDir + 'item_compounddb.json');
            json = JSON.parse(contents);
            this.item_compounddb = new item_compoundDBMgr();
            this.item_compounddb.load(json);
        } catch (err) {
            throw new Error('item_compounddb.json read failed');
        }
		/// leveldb
        try {
            contents = fs.readFileSync(jsonDir + 'leveldb.json');
            json = JSON.parse(contents);
            this.leveldb = new levelDBMgr();
            this.leveldb.load(json);
        } catch (err) {
            throw new Error('leveldb.json read failed');
        }
		/// level_progress_additiondb
        try {
            contents = fs.readFileSync(jsonDir + 'level_progress_additiondb.json');
            json = JSON.parse(contents);
            this.level_progress_additiondb = new level_progress_additionDBMgr();
            this.level_progress_additiondb.load(json);
        } catch (err) {
            throw new Error('level_progress_additiondb.json read failed');
        }
		/// miracledb
        try {
            contents = fs.readFileSync(jsonDir + 'miracledb.json');
            json = JSON.parse(contents);
            this.miracledb = new miracleDBMgr();
            this.miracledb.load(json);
        } catch (err) {
            throw new Error('miracledb.json read failed');
        }
		/// module_opendb
        try {
            contents = fs.readFileSync(jsonDir + 'module_opendb.json');
            json = JSON.parse(contents);
            this.module_opendb = new module_openDBMgr();
            this.module_opendb.load(json);
        } catch (err) {
            throw new Error('module_opendb.json read failed');
        }
		/// notice_activitydb
        try {
            contents = fs.readFileSync(jsonDir + 'notice_activitydb.json');
            json = JSON.parse(contents);
            this.notice_activitydb = new notice_activityDBMgr();
            this.notice_activitydb.load(json);
        } catch (err) {
            throw new Error('notice_activitydb.json read failed');
        }
		/// npcdb
        try {
            contents = fs.readFileSync(jsonDir + 'npcdb.json');
            json = JSON.parse(contents);
            this.npcdb = new npcDBMgr();
            this.npcdb.load(json);
        } catch (err) {
            throw new Error('npcdb.json read failed');
        }
		/// officedb
        try {
            contents = fs.readFileSync(jsonDir + 'officedb.json');
            json = JSON.parse(contents);
            this.officedb = new officeDBMgr();
            this.officedb.load(json);
        } catch (err) {
            throw new Error('officedb.json read failed');
        }
		/// pingbicidb
        try {
            contents = fs.readFileSync(jsonDir + 'pingbicidb.json');
            json = JSON.parse(contents);
            this.pingbicidb = new pingbiciDBMgr();
            this.pingbicidb.load(json);
        } catch (err) {
            throw new Error('pingbicidb.json read failed');
        }
		/// player_namedb
        try {
            contents = fs.readFileSync(jsonDir + 'player_namedb.json');
            json = JSON.parse(contents);
            this.player_namedb = new player_nameDBMgr();
            this.player_namedb.load(json);
        } catch (err) {
            throw new Error('player_namedb.json read failed');
        }
		/// prisonerdb
        try {
            contents = fs.readFileSync(jsonDir + 'prisonerdb.json');
            json = JSON.parse(contents);
            this.prisonerdb = new prisonerDBMgr();
            this.prisonerdb.load(json);
        } catch (err) {
            throw new Error('prisonerdb.json read failed');
        }
		/// propertydb
        try {
            contents = fs.readFileSync(jsonDir + 'propertydb.json');
            json = JSON.parse(contents);
            this.propertydb = new propertyDBMgr();
            this.propertydb.load(json);
        } catch (err) {
            throw new Error('propertydb.json read failed');
        }
		/// recharge_productdb
        try {
            contents = fs.readFileSync(jsonDir + 'recharge_productdb.json');
            json = JSON.parse(contents);
            this.recharge_productdb = new recharge_productDBMgr();
            this.recharge_productdb.load(json);
        } catch (err) {
            throw new Error('recharge_productdb.json read failed');
        }
		/// rewarddb
        try {
            contents = fs.readFileSync(jsonDir + 'rewarddb.json');
            json = JSON.parse(contents);
            this.rewarddb = new rewardDBMgr();
            this.rewarddb.load(json);
        } catch (err) {
            throw new Error('rewarddb.json read failed');
        }
		/// reward_icondb
        try {
            contents = fs.readFileSync(jsonDir + 'reward_icondb.json');
            json = JSON.parse(contents);
            this.reward_icondb = new reward_iconDBMgr();
            this.reward_icondb.load(json);
        } catch (err) {
            throw new Error('reward_icondb.json read failed');
        }
		/// rolldb
        try {
            contents = fs.readFileSync(jsonDir + 'rolldb.json');
            json = JSON.parse(contents);
            this.rolldb = new rollDBMgr();
            this.rolldb.load(json);
        } catch (err) {
            throw new Error('rolldb.json read failed');
        }
		/// rule_descdb
        try {
            contents = fs.readFileSync(jsonDir + 'rule_descdb.json');
            json = JSON.parse(contents);
            this.rule_descdb = new rule_descDBMgr();
            this.rule_descdb.load(json);
        } catch (err) {
            throw new Error('rule_descdb.json read failed');
        }
		/// scene_bgmdb
        try {
            contents = fs.readFileSync(jsonDir + 'scene_bgmdb.json');
            json = JSON.parse(contents);
            this.scene_bgmdb = new scene_bgmDBMgr();
            this.scene_bgmdb.load(json);
        } catch (err) {
            throw new Error('scene_bgmdb.json read failed');
        }
		/// searchdb
        try {
            contents = fs.readFileSync(jsonDir + 'searchdb.json');
            json = JSON.parse(contents);
            this.searchdb = new searchDBMgr();
            this.searchdb.load(json);
        } catch (err) {
            throw new Error('searchdb.json read failed');
        }
		/// search_builddb
        try {
            contents = fs.readFileSync(jsonDir + 'search_builddb.json');
            json = JSON.parse(contents);
            this.search_builddb = new search_buildDBMgr();
            this.search_builddb.load(json);
        } catch (err) {
            throw new Error('search_builddb.json read failed');
        }
		/// search_build_infodb
        try {
            contents = fs.readFileSync(jsonDir + 'search_build_infodb.json');
            json = JSON.parse(contents);
            this.search_build_infodb = new search_build_infoDBMgr();
            this.search_build_infodb.load(json);
        } catch (err) {
            throw new Error('search_build_infodb.json read failed');
        }
		/// search_rewarddb
        try {
            contents = fs.readFileSync(jsonDir + 'search_rewarddb.json');
            json = JSON.parse(contents);
            this.search_rewarddb = new search_rewardDBMgr();
            this.search_rewarddb.load(json);
        } catch (err) {
            throw new Error('search_rewarddb.json read failed');
        }
		/// search_roledb
        try {
            contents = fs.readFileSync(jsonDir + 'search_roledb.json');
            json = JSON.parse(contents);
            this.search_roledb = new search_roleDBMgr();
            this.search_roledb.load(json);
        } catch (err) {
            throw new Error('search_roledb.json read failed');
        }
		/// search_typedb
        try {
            contents = fs.readFileSync(jsonDir + 'search_typedb.json');
            json = JSON.parse(contents);
            this.search_typedb = new search_typeDBMgr();
            this.search_typedb.load(json);
        } catch (err) {
            throw new Error('search_typedb.json read failed');
        }
		/// seat_expanddb
        try {
            contents = fs.readFileSync(jsonDir + 'seat_expanddb.json');
            json = JSON.parse(contents);
            this.seat_expanddb = new seat_expandDBMgr();
            this.seat_expanddb.load(json);
        } catch (err) {
            throw new Error('seat_expanddb.json read failed');
        }
		/// sevensignrewarddb
        try {
            contents = fs.readFileSync(jsonDir + 'sevensignrewarddb.json');
            json = JSON.parse(contents);
            this.sevensignrewarddb = new sevensignrewardDBMgr();
            this.sevensignrewarddb.load(json);
        } catch (err) {
            throw new Error('sevensignrewarddb.json read failed');
        }
		/// shop_giftdb
        try {
            contents = fs.readFileSync(jsonDir + 'shop_giftdb.json');
            json = JSON.parse(contents);
            this.shop_giftdb = new shop_giftDBMgr();
            this.shop_giftdb.load(json);
        } catch (err) {
            throw new Error('shop_giftdb.json read failed');
        }
		/// silk_roaddb
        try {
            contents = fs.readFileSync(jsonDir + 'silk_roaddb.json');
            json = JSON.parse(contents);
            this.silk_roaddb = new silk_roadDBMgr();
            this.silk_roaddb.load(json);
        } catch (err) {
            throw new Error('silk_roaddb.json read failed');
        }
		/// silk_road_pathdb
        try {
            contents = fs.readFileSync(jsonDir + 'silk_road_pathdb.json');
            json = JSON.parse(contents);
            this.silk_road_pathdb = new silk_road_pathDBMgr();
            this.silk_road_pathdb.load(json);
        } catch (err) {
            throw new Error('silk_road_pathdb.json read failed');
        }
		/// silk_road_posdb
        try {
            contents = fs.readFileSync(jsonDir + 'silk_road_posdb.json');
            json = JSON.parse(contents);
            this.silk_road_posdb = new silk_road_posDBMgr();
            this.silk_road_posdb.load(json);
        } catch (err) {
            throw new Error('silk_road_posdb.json read failed');
        }
		/// silk_road_statedb
        try {
            contents = fs.readFileSync(jsonDir + 'silk_road_statedb.json');
            json = JSON.parse(contents);
            this.silk_road_statedb = new silk_road_stateDBMgr();
            this.silk_road_statedb.load(json);
        } catch (err) {
            throw new Error('silk_road_statedb.json read failed');
        }
		/// skilldb
        try {
            contents = fs.readFileSync(jsonDir + 'skilldb.json');
            json = JSON.parse(contents);
            this.skilldb = new skillDBMgr();
            this.skilldb.load(json);
        } catch (err) {
            throw new Error('skilldb.json read failed');
        }
		/// skill_lv_updb
        try {
            contents = fs.readFileSync(jsonDir + 'skill_lv_updb.json');
            json = JSON.parse(contents);
            this.skill_lv_updb = new skill_lv_upDBMgr();
            this.skill_lv_updb.load(json);
        } catch (err) {
            throw new Error('skill_lv_updb.json read failed');
        }
		/// specialherodb
        try {
            contents = fs.readFileSync(jsonDir + 'specialherodb.json');
            json = JSON.parse(contents);
            this.specialherodb = new specialheroDBMgr();
            this.specialherodb.load(json);
        } catch (err) {
            throw new Error('specialherodb.json read failed');
        }
		/// stagedb
        try {
            contents = fs.readFileSync(jsonDir + 'stagedb.json');
            json = JSON.parse(contents);
            this.stagedb = new stageDBMgr();
            this.stagedb.load(json);
        } catch (err) {
            throw new Error('stagedb.json read failed');
        }
		/// stage_posdb
        try {
            contents = fs.readFileSync(jsonDir + 'stage_posdb.json');
            json = JSON.parse(contents);
            this.stage_posdb = new stage_posDBMgr();
            this.stage_posdb.load(json);
        } catch (err) {
            throw new Error('stage_posdb.json read failed');
        }
		/// taofa_infodb
        try {
            contents = fs.readFileSync(jsonDir + 'taofa_infodb.json');
            json = JSON.parse(contents);
            this.taofa_infodb = new taofa_infoDBMgr();
            this.taofa_infodb.load(json);
        } catch (err) {
            throw new Error('taofa_infodb.json read failed');
        }
		/// taofa_npc_rewarddb
        try {
            contents = fs.readFileSync(jsonDir + 'taofa_npc_rewarddb.json');
            json = JSON.parse(contents);
            this.taofa_npc_rewarddb = new taofa_npc_rewardDBMgr();
            this.taofa_npc_rewarddb.load(json);
        } catch (err) {
            throw new Error('taofa_npc_rewarddb.json read failed');
        }
		/// taskdb
        try {
            contents = fs.readFileSync(jsonDir + 'taskdb.json');
            json = JSON.parse(contents);
            this.taskdb = new taskDBMgr();
            this.taskdb.load(json);
        } catch (err) {
            throw new Error('taskdb.json read failed');
        }
		/// vipdb
        try {
            contents = fs.readFileSync(jsonDir + 'vipdb.json');
            json = JSON.parse(contents);
            this.vipdb = new vipDBMgr();
            this.vipdb.load(json);
        } catch (err) {
            throw new Error('vipdb.json read failed');
        }
		/// thronedb
        try {
            contents = fs.readFileSync(jsonDir + 'thronedb.json');
            json = JSON.parse(contents);
            this.thronedb = new throneDBMgr();
            this.thronedb.load(json);
        } catch (err) {
            throw new Error('thronedb.json read failed');
        }
		/// titledb
        try {
            contents = fs.readFileSync(jsonDir + 'titledb.json');
            json = JSON.parse(contents);
            this.titledb = new titleDBMgr();
            this.titledb.load(json);
        } catch (err) {
            throw new Error('titledb.json read failed');
        }
	}
}
