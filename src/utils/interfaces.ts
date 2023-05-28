export interface BannerProps {
  banners: {
    [key: string]: string;
    hijab: string;
    dress: string;
    bottom: string;
  };
}

export interface BannerContainerProps {
  bannerImage?: string;
}

export interface BannerProps {
  banners: {
    [key: string]: string;
    hijab: string;
    dress: string;
    bottom: string;
  };
}
type tagType = 'HOME' | 'NEW ARRIVALS' | 'CATEGORIES' | 'DEFECT SALE' | 'ALL PRODUCT' | 'HOW TO ORDER';

export interface ListParams {
  title: string;
  link: string;
}

export interface NavItemsParams {
  id: number;
  tag: tagType;
  title: string;
  path: string;
  isDropDown: boolean;
  downList?: ListParams[];
}

export interface INavMenuProps {
  data: NavItemsParams;
}

export interface INavProps {
  data?: ListParams[];
}

export type Category = 'hizap' | 'shirts';

export interface Attributes {
  colors: string[];
  sizes: string[];
}

export interface Item {
  id: number;
  name: string;
  category: Category;
  desc: string;
  price: number;
  currency: string;
  purchase_count: number;
  attribute: Attributes;
  thumbnail: string;
}

export interface FilterItemParams {
  id: number;
  title: string;
  path: string;
}
export interface FilterModalParams {
  isVisible: boolean;
  filterKeys: string[];
}
export interface DetailItemParams extends Item {
  isVisible: boolean;
}