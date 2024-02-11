import { kinds } from "nostr-tools";
import { DEFAULT_RELAYS, getProviders, pool } from "@utils/nostr";

type Profile = {
  relay: string;
  displayName?: string;
  name?: string;
  picture?: string;
  banner?: string;
  about?: string;
  website?: string;
  // I think this is lud16 and lud06 is the messy string
  lud06?: string;
  lud16?: string;
  publickey?: string;
};

class Auth {
  // get user data, relays -  login
  // set 'remember me'
  // handle logout - reset user data, relays and 'remember me'

  public loginWithKey(privateKey: string) {
    // get data with key
  }

  /**
   * This is meant to run on the client side, retrieve the user's public key and send to server
   * */
  public async loginWithExtension() {
    const profiles: Profile[] = [];

    try {
      const { webln, nostr } = await getProviders();
      // Enabling the lightning network
      if (!webln.enabled) {
        await webln.enable();
        console.log("webln enabled!!");
      }

      // Get publicKey
      const publickey = await nostr.getPublicKey();

      for (const relay of DEFAULT_RELAYS) {
        const filter = {
          kinds: [kinds.Metadata],
          authors: [publickey],
        };
        const event = await pool.querySync([relay], filter);
        const json = JSON.parse(event[0].content);

        const profile: Profile = {
          relay,
          publickey,
          name: json.name,
          displayName: json.display_name,
          picture: json.picture,
          banner: json.banner,
          about: json.about,
          website: json.website,
          lud06: json.lud06,
          lud16: json.lud16,
        };

        profiles.push(profile);

        // return profiles;
      }
    } catch (error) {
      // TODO: handle error properly
      console.error("There was an error while loggin in -> ", error);
      throw error;
    } finally {
      return profiles;
    }
  }

  public logout() {
    // set cookie 'remember me' to 0
  }

  public updateProfile() {
    // update profile
  }
}

const auth = new Auth();

export default auth;
