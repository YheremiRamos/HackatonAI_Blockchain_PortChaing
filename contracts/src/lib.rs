use near_sdk::{near_bindgen, AccountId};

#[near_bindgen]
pub struct Portfolio {
    owner: AccountId,
    metadata: String, // IPFS hash o JSON
}

#[near_bindgen]
impl Portfolio {
    pub fn tokenize(&mut self, metadata: String) {
        self.metadata = metadata;
    }
}