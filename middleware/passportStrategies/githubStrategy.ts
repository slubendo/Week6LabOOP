import { Strategy as GitHubStrategy } from 'passport-github2';
import { PassportStrategy } from '../../interfaces/index';
import {Request, Response} from "express";


const githubStrategy: GitHubStrategy = new GitHubStrategy(
    {
        clientID: "",
        clientSecret: "",
        callbackURL: "",
        passReqToCallback: true,
    },
    
    /* FIX ME 😭 */
    async (req: Request, accessToken: any, refreshToken: any, profile: any, done: any) => {},
);

const passportGitHubStrategy: PassportStrategy = {
    name: 'github',
    strategy: githubStrategy,
};

export default passportGitHubStrategy;
