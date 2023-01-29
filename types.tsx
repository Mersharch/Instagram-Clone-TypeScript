export interface PostType {
    
    id: number;
    pp:string;
    name:string;
    img:string;
    likes?:number;
    caption?:string;
    comments?:  {
        comment:string; 
        user:string
    }[];
    loc?:string;
    

}

export interface StoriesType {
    id: number;
    img:string;
    name:string;
}