# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - img "Logo" [ref=e6]
  - main [ref=e7]:
    - generic [ref=e8]:
      - generic:
        - img "Page Logo"
      - generic [ref=e10]:
        - heading "Welcome To Open Road!" [level=3] [ref=e11]
        - generic [ref=e12]:
          - generic [ref=e14]:
            - generic "Email Address*" [ref=e16]
            - textbox "Email Address*" [ref=e20]:
              - /placeholder: Enter Email Address
              - text: admin@openroadapp.us
          - generic [ref=e22]:
            - generic "Password*" [ref=e24]
            - generic [ref=e28]:
              - textbox "Password*" [ref=e29]:
                - /placeholder: Enter Password
                - text: Admin@123
              - img "eye-invisible" [ref=e31] [cursor=pointer]:
                - img [ref=e32]
          - generic [ref=e36]:
            - generic "Enter Captcha*" [ref=e38]
            - generic [ref=e42]:
              - generic [ref=e44]:
                - generic [ref=e45]: DI1EMU
                - button "reload" [ref=e46] [cursor=pointer]:
                  - img "reload" [ref=e48]:
                    - img [ref=e49]
              - textbox "Enter The Text In The Image" [ref=e52]: DI1EMU
          - button "loading Log In" [active] [ref=e58]:
            - img "loading" [ref=e60]:
              - img [ref=e61]
            - generic [ref=e63]: Log In
```