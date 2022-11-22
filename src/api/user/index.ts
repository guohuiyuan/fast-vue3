// 权限问题后期增加
import { get, post } from '/@/utils/http/axios';
import { UserState } from '/@/store/modules/user/types';
// import axios from 'axios';
enum URL {
  login = '/user/login',
  logout = '/user/logout',
  profile = '/user/profile',
  searchHotDetail = '/search/hot/detail',
}
interface LoginRes {
  token: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface SearchHotDetailReply {
  code: number;
  data: Array<SearchHotDetailData>;
}

export interface SearchHotDetailData {
  searchWord: string;
  score: number;
  content: string;
  source: number;
  iconType: number;
  iconUrl: string;
  url: string;
  alg: string;
}

const getUserProfile = async () => get<UserState>({ url: URL.profile });
const login = async (data: LoginData) => post<any>({ url: URL.login, data });
const logout = async () => post<LoginRes>({ url: URL.logout });
const searchHotDetail = async () => get<SearchHotDetailReply>({ url: URL.searchHotDetail });
export { getUserProfile, logout, login, searchHotDetail };
