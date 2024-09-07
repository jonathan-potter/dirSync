# dirSync

used to sync a local directory to a remote directory

## My use case

I use this so that I can write software locally on my macbook and have it synced up with a directory on my raspberry pi

Is there a better way to do this? I'm sure there are multiple.

## Usage

currently this is setup to be used directly:

```
node dirSync/index.js project-dir/ username@192.168.0.153:~/code/project-dir/
```

Setup:

- follow GitHub's instructions for [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- add your newly generated public key to the remote device's `~/.ssh/authorized_keys`
    - local system (macos)
        - `cat ~/.ssh/id_raspberrypi.pub | pbcopy`
    - remote system
        - `echo (clipboard contents) > ~/.ssh/authorized_keys`
