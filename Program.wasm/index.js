var files=["Program.exe","mscorlib.dll",];
Error.stackTraceLimit=Infinity;var dump_cross_offsets=false;var debug_logs=false;var functions={env:{}};var instance;var heap;var heap_size;var browser_environment=(typeof window!="undefined");function heap_get_short(ptr){var d=0;d+=(heap[ptr+0]<<0);d+=(heap[ptr+1]<<8);return d;}
function heap_get_int(ptr){var d=0;d+=(heap[ptr+0]<<0);d+=(heap[ptr+1]<<8);d+=(heap[ptr+2]<<16);d+=(heap[ptr+3]<<24);return d;}
function heap_get_long(ptr){var d=0;d+=(heap[ptr+0]<<0);d+=(heap[ptr+1]<<8);d+=(heap[ptr+2]<<16);d+=(heap[ptr+3]<<24);d+=(heap[ptr+4]<<32);d+=(heap[ptr+5]<<40);d+=(heap[ptr+6]<<48);d+=(heap[ptr+7]<<56);return d;}
function heap_set_int(ptr,d){heap[ptr+0]=((d&0x000000ff)>>0);heap[ptr+1]=((d&0x0000ff00)>>8);heap[ptr+2]=((d&0x00ff0000)>>16);heap[ptr+3]=((d&0xff000000)>>24);return d;}
function heap_set_long(ptr,d){heap[ptr+0]=((d&0x00000000000000ff)>>0);heap[ptr+1]=((d&0x000000000000ff00)>>8);heap[ptr+2]=((d&0x0000000000ff0000)>>16);heap[ptr+3]=((d&0x00000000ff000000)>>24);heap[ptr+4]=((d&0x000000ff00000000)>>32);heap[ptr+5]=((d&0x0000ff0000000000)>>40);heap[ptr+6]=((d&0x00ff000000000000)>>48);heap[ptr+7]=((d&0xff00000000000000)>>56);return d;}
function heap_get_string(ptr,len=-1){var str='';var i=0;while(true){var c=heap[ptr+i];if(c==0){break;}
if(i==len){break;}
str+=String.fromCharCode(c);i++;}
return str;}
function heap_get_mono_string(ptr)
{var str_length=heap_get_int(ptr+8)
var str_chars=ptr+12
var str=''
for(var i=0;i<str_length;i++){var c=heap_get_short(str_chars+(i*2))
str+=String.fromCharCode(c);}
return str;}
function heap_set_string(ptr,str){for(var i=0;i<str.length;i++){heap[ptr+i]=str.charCodeAt(i);}
heap[ptr+str.length]=0}
function heap_malloc_string(str){var ptr=instance.exports.malloc(str.length+1)
heap_set_string(ptr,str)
return ptr}
function heap_human(size){var suffixes=['B','K','M','G']
var suffix;for(var i in suffixes){suffix=suffixes[i]
if(size<1000){break}
size/=1000}
return size.toFixed(2)+suffix}
function log(str){browser_environment?console.log(str):print(str)}
function debug(str){if(debug_logs){log(">> "+str);}}
function error(str){log("!! "+str+": "+new Error().stack);}
function TerminateWasmException(value){this.message='Terminating WebAssembly';this.value=value;this.toString=function(){return this.message+': '+this.value;};}
function NotYetImplementedException(what){this.message='Not yet implemented';this.what=what;this.toString=function(){return this.message+': '+this.what;};}
var missing_functions=["__addtf3","__clone","__divdc3","__divtf3","__eqtf2","__extenddftf2","__extendsftf2","__fixtfdi","__fixtfsi","__fixunstfsi","__floatsitf","__floatunsitf","__getf2","__lsysinfo","__lttf2","__mmap","__multf3","__munmap","__netf2","__randname","__set_thread_area","__subtf3","__synccall","__syscall","__syscall0","__syscall1","__syscall2","__syscall3","__syscall4","__syscall5","__syscall6","__syscall_cp","__trunctfdf2","__trunctfsf2","__unordtf2","__wait","_pthread_cleanup_pop","_pthread_cleanup_push","accept","bind","btowc","cabs","chmod","closedir","closelog","connect","execv","execve","execvp","feclearexcept","fegetround","feraiseexcept","fesetround","fetestexcept","fork","freeaddrinfo","getaddrinfo","getgrgid_r","getgrnam_r","getnameinfo","getpeername","getpriority","getprotobyname","getpwnam_r","getpwuid_r","getrusage","getsockname","getsockopt","htons","ioctl","listen","longjmp","lstat","mbrtowc","mbsinit","mbsnrtowcs","mbstowcs","mbtowc","mincore","mkdir","mkdtemp","mkstemp","mmap","mono_arch_cleanup","mono_arch_context_get_int_reg","mono_arch_create_generic_trampoline","mono_arch_create_rgctx_lazy_fetch_trampoline","mono_arch_create_specific_trampoline","mono_arch_find_imt_method","mono_arch_find_static_call_vtable","mono_arch_flush_register_windows","mono_arch_free_jit_tls_data","mono_arch_get_argument_info","mono_arch_get_call_filter","mono_arch_get_delegate_invoke_impl","mono_arch_get_delegate_virtual_invoke_impl","mono_arch_get_gsharedvt_arg_trampoline","mono_arch_get_gsharedvt_call_info","mono_arch_get_gsharedvt_trampoline","mono_arch_get_restore_context","mono_arch_get_rethrow_exception","mono_arch_get_static_rgctx_trampoline","mono_arch_get_this_arg_from_call","mono_arch_get_throw_corlib_exception","mono_arch_get_throw_exception","mono_arch_get_unbox_trampoline","mono_arch_handle_exception","mono_arch_ip_from_context","mono_arch_patch_callsite","mono_arch_patch_plt_entry","mono_arch_regname","mono_arch_unwind_frame","mono_interp_frame_iter_init","mono_interp_frame_iter_next","mono_interp_run_finally","mono_interp_set_resume_state","mono_monoctx_to_sigctx","mono_mprotect","mono_sigctx_to_monoctx","mono_vfree","mono_w32file_get_volume_information","mono_wasm_js_eval_imp","mono_wasm_throw_exception","msync","munmap","opendir","openlog","posix_spawn","posix_spawn_file_actions_adddup2","posix_spawn_file_actions_destroy","posix_spawn_file_actions_init","pthread_attr_destroy","pthread_attr_getstacksize","pthread_attr_init","pthread_attr_setdetachstate","pthread_attr_setstacksize","pthread_barrier_init","pthread_barrier_wait","pthread_cond_broadcast","pthread_cond_destroy","pthread_cond_init","pthread_cond_signal","pthread_cond_timedwait","pthread_cond_wait","pthread_condattr_destroy","pthread_condattr_init","pthread_condattr_setclock","pthread_create","pthread_exit","pthread_getschedparam","pthread_getspecific","pthread_join","pthread_key_create","pthread_key_delete","pthread_kill","pthread_mutex_destroy","pthread_mutex_init","pthread_mutex_lock","pthread_mutex_trylock","pthread_mutex_unlock","pthread_mutexattr_destroy","pthread_mutexattr_init","pthread_mutexattr_settype","pthread_once","pthread_self","pthread_setcancelstate","pthread_setschedparam","pthread_setspecific","pthread_sigmask","readdir","recvfrom","recvmsg","sched_get_priority_max","sched_yield","select","sem_destroy","sem_init","sem_post","sem_timedwait","sem_trywait","sem_wait","send","sendmsg","sendto","setjmp","setpriority","setsockopt","shutdown","socket","statvfs","syslog","uname","utimensat","waitpid","wcsrtombs","wctomb","mono_arch_build_imt_trampoline"];var missing_globals=["_ZTIPi"];if(typeof files=="undefined"){var files=[];}
for(var i in missing_functions){f=missing_functions[i];functions['env'][f]=(function(f){return function(){error("Not Yet Implemented: "+f)
throw new NotYetImplementedException(f);}})(f);}
var do_nothing_functions=['pthread_mutexattr_init','pthread_mutexattr_settype','pthread_mutex_init','pthread_mutexattr_destroy','pthread_mutex_lock','pthread_mutex_unlock','pthread_condattr_init','pthread_condattr_setclock','pthread_cond_init','pthread_condattr_destroy','pthread_sigmask','_pthread_cleanup_push','_pthread_cleanup_pop','pthread_self','pthread_create','pthread_mutex_trylock','pthread_attr_init','pthread_attr_setstacksize','pthread_attr_getstacksize','pthread_attr_destroy','sem_init','sem_wait','sem_post','mono_console_init','__munmap','pthread_cond_broadcast','pthread_mutex_destroy','pthread_cond_destroy','mono_mprotect','sched_yield']
for(var i in do_nothing_functions){f=do_nothing_functions[i];functions['env'][f]=function(){}}
var tls_variables={}
functions['env']['pthread_key_create']=function(key_ptr,destructor){key=Object.keys(tls_variables).length;tls_variables[key]=0;heap_set_int(key_ptr,key);return 0;}
functions['env']['pthread_getspecific']=function(key){var value=tls_variables[key];debug('pthread_getspecific('+key+') -> '+value);return value;}
functions['env']['pthread_setspecific']=function(key,value){debug('pthread_setspecific('+key+', '+value+')');tls_variables[key]=value;return 0;}
for(var i in missing_globals){g=missing_globals[i];functions['env'][g]=0;}
functions['env']['mono_wasm_throw_exception']=function(exc){var class_str=heap_get_mono_string(heap_get_int(exc+8))
var message_str=heap_get_mono_string(heap_get_int(exc+12))
msg=('Mono Exception: '+(class_str.length>0?class_str+': ':'')
+message_str)
error(msg)
throw new TerminateWasmException(msg)}
functions['env']['mono_wasm_js_eval_imp']=function(expr,exception_raised){var str=heap_get_string(expr);var res=undefined;try{res=eval(str);}
catch(e){heap_set_int(exception_raised,1);res=e;}
return heap_malloc_string(String(res));}
var mono_wasm_refs={};var mono_wasm_ref_counter=0;Object.defineProperty(Object.prototype,"__mono_wasm_ref__",{writable:true});function mono_wasm_wrap_obj(obj){var ref=undefined;if(obj!=null){ref=obj.__mono_wasm_ref__;if(ref==undefined){obj.__mono_wasm_ref__=ref=mono_wasm_ref_counter++;}
mono_wasm_refs[ref]=obj;}
return ref;}
function mono_wasm_unwrap_obj(ref){return mono_wasm_refs[ref];}
function _MonoDomain(){return instance.exports.mono_domain_get();}
function _MonoGPtrToArray(ptr){var pdata=heap_get_int(ptr+0);var plen=heap_get_int(ptr+4);var ary=[];for(var i=0;i<plen;i++){ary.push(heap_get_int(pdata+(i*4)));}
return ary;}
function _MonoAssemblies(){var ptr=instance.exports.mono_domain_get_assemblies(_MonoDomain(),false);return _MonoGPtrToArray(ptr);}
function _MonoImage(assembly){return instance.exports.mono_assembly_get_image(assembly);}
function MonoClass(namespace,name){var namespace_str=heap_malloc_string(namespace);var name_str=heap_malloc_string(name);var assemblies=_MonoAssemblies();var klass=undefined;for(var i in assemblies){var assembly=assemblies[i];var image=_MonoImage(assembly);var klass=instance.exports.mono_class_from_name(image,namespace_str,name_str);if(klass){break;}}
instance.exports.free(namespace_str);instance.exports.free(name_str);return klass;}
function MonoMethod(klass,name,is_static){var flags=(is_static?0x10:0);var name_str=heap_malloc_string(name);var method=instance.exports.mono_class_get_method_from_name_flags(klass,name_str,-1,flags);instance.exports.free(name_str);return method;}
function MonoInvoke(obj,method,params){var sig=instance.exports.mono_method_signature(method);var argc=instance.exports.mono_signature_get_param_count(sig);if(params.length!=argc){throw"invalid number of parameters";}
var argv=0;if(argc>0){argv=instance.exports.malloc(4*argc);for(var i in params){var param=params[i];var arg=undefined;if(Number.isInteger(param)){arg=instance.exports.malloc(4);heap_set_int(arg,param);}
else if(typeof param==='string'){var param_str=heap_malloc_string(param);arg=instance.exports.mono_string_new(_MonoDomain(),param_str)
instance.exports.free(param_str);}
else{throw"unsupported param type";}
heap_set_int(argv+(i*4),arg);}}
var res=instance.exports.mono_runtime_invoke(method,obj,argv);if(argc>0){instance.exports.free(argv);}
return res;}
var fds={}
fds[0]=undefined
fds[1]=undefined
fds[2]=undefined
var out_buffer='';function out_buffer_add(ptr,len){out_buffer+=heap_get_string(ptr,len)}
function out_buffer_flush(){if(out_buffer.charAt(out_buffer.length-1)=='\n'){log(out_buffer.substr(0,out_buffer.length-1))
out_buffer=''}}
var files_content={}
var syscalls={}
syscalls[3]=function SYS_read(fd,buf,len){var obj=fds[fd]
if(obj){debug('read('+fd+') -> '+len)
offset=obj['offset']
buffer=obj['content']
heap.set(buffer.subarray(offset,offset+len),buf)
return len}
error('read() called with invalid fd '+fd)
return-1}
syscalls[4]=function SYS_write(fd,buf,len){if(fd==1||fd==2){out_buffer_add(buf,len)
out_buffer_flush()
return len}
error('write() called with invalid fd '+fd)}
syscalls[6]=function SYS_close(fd){var obj=fds[fd]
if(obj){fds[fd]=undefined
return 0}
error('close() called with invalid fd '+fd)
return-1}
syscalls[20]=function SYS_getpid(){return 42}
var brk_current=0
syscalls[45]=function SYS_brk(inc){if(inc==0){brk_current=heap_size;debug("brk: current heap "+heap_human(brk_current))
return brk_current;}
if(brk_current+inc>heap_size){var delta=inc-(heap_size-brk_current)
brk_current+=inc
var new_pages_needed=Math.ceil(delta/65536.0)
var memory=instance.exports.memory
var n=memory.grow(new_pages_needed);var new_heap_size=memory.buffer.byteLength
debug("brk: pages "+n+" -> "+(n+new_pages_needed)+" (+"+new_pages_needed+"), heap "+heap_human(heap_size)+" -> "+heap_human(new_heap_size)+" (+"+heap_human(new_heap_size-heap_size)+")")
heap=new Uint8Array(memory.buffer)
heap_size=new_heap_size}
return inc}
syscalls[54]=function SYS_ioctl(fd,req,arg){return 0}
syscalls[55]=function SYS_fcntl(fd,cmd,arg){if(cmd==3){if(fd==1||fd==2){return 1}
if(fd==0||fds[fd]){return 0}}
error('fcntl() called with invalid fd '+fd+' and/or cmd '+cmd)
return-1}
syscalls[76]=function SYS_getrlimit(resource,rlim){return 0}
syscalls[85]=function SYS_readlink(path,buf,buflen){debug('readlink("'+heap_get_string(path)+'")')
return-1}
syscalls[146]=function SYS_writev(fd,iovs,iov_count){if(fd==1||fd==2){var all_lens=0
for(var i=0;i<iov_count;i++){var base=heap_get_int(iovs+(i*8))
var len=heap_get_int(iovs+4+(i*8))
debug("write fd: "+fd+", base: "+base+", len: "+len)
out_buffer_add(base,len)
all_lens+=len}
out_buffer_flush()
return all_lens}
error("can only write on stdout and stderr")
return-1}
var sizeof_k_sigaction=20
var signals={}
syscalls[174]=function SYS_sigaction(sig,act,oact,mask_len){if(mask_len!=8){error('mask_len should be 8 (is '+mask_len+')')
mask_len=8}
sig_act=(signals[sig]||new Uint8Array(sizeof_k_sigaction))
if(oact!=0){heap.set(sig_act,oact)}
if(act!=0){sig_act.set(heap.slice(act,sizeof_k_sigaction))}
return 0}
syscalls[106]=function SYS_stat(path,s){var path_str=heap_get_string(path)
debug('stat("'+path_str+'")')
if(path_str=="/"){heap_set_int(s+16,0040000)
return 0}
for(var i in files){var file="/"+files[i];if(path_str==file){heap_set_int(s+16,0100000)
return 0}}
return-1}
syscalls[108]=function SYS_fstat(fd,s){var obj=fds[fd]
if(obj){var st_size=obj['content'].length
debug('fstat('+fd+') -> { st_size: '+st_size+' }')
heap_set_int(s+40,st_size)
return 0}
error('fstat() called with invalid fd '+fd)
return-1}
syscalls[140]=function SYS_lseek(fd,unused,offset,result,whence){var obj=fds[fd]
if(obj){if(whence==0){obj['offset']=offset}
else if(whence==1){offset=obj['offset']}
else{error('lseek() called with invalid whence '+whence)
return-1}
debug('lseek('+fd+', ...) -> '+offset)
heap_set_long(result,offset)
return 0}
error('lseek() called with invalid fd '+fd)
return-1}
syscalls[175]=function SYS_sigprocmask(action,mask,set,sig_n){return 0}
syscalls[183]=function SYS_getcwd(buf,buflen){if(buflen>1){heap_set_string(buf,"/")
return 0}
error('getcwd() called with buflen '+buflen)
return-1}
var process_tid=42
syscalls[224]=function SYS_gettid(){return process_tid}
syscalls[219]=function SYS_madvise(addr,len,advice){if(advice==4){return 0}
return-1}
syscalls[238]=function SYS_tkill(tid,signal){if(tid==process_tid){if(signal==6){error("received SIGABRT")
throw new TerminateWasmException('SIGABRT');}
error('tkill() with unsupported signal: '+signal)}
else{error('tkill() with wrong tid: '+tid)}
return-1}
syscalls[252]=function SYS_exit(code){log("exit("+code+"): "+new Error().stack)
throw new TerminateWasmException('exit('+code+')');}
syscalls[265]=function SYS_clock_gettime(clock_id,timespec){if(timespec){var ms=new Date().getTime()
var sec=Math.floor(ms/1000)
var nsec=(ms%1000)*1000000
debug("clock_gettime: msec: "+ms+" -> sec: "+sec+", nsec: "
+nsec)
heap_set_int(timespec,sec)
heap_set_int(timespec+4,nsec)}
return 0;}
syscalls[266]=function SYS_clock_getred(clock_id,timespec){if(timespec){heap_set_int(timespec,0)
heap_set_int(timespec+4,1000000)}
return 0}
syscalls[295]=function SYS_openat(at,filename,flags,mode){if(at==-100){if(flags==0100000){var filename_str=heap_get_string(filename)
var fd=-1
if(filename_str.charAt(0)=='/'){filename_str=filename_str.substr(1)}
if(files.indexOf(filename_str)!=-1){var obj={};obj['offset']=0;obj['path']=filename_str;var buf=files_content[filename_str]
if(!buf){buf=new Uint8Array(readbuffer(filename_str))
files_content[filename_str]=buf}
obj['content']=buf
fd=Object.keys(fds).length;fds[fd]=obj;}
debug('open("'+filename_str+'") -> '+fd);return fd}}
error('openat() called with at '+at+' and flags '+flags)
return-1}
syscalls[340]=function SYS_prlimit64(pid,resource,new_rlim,old_rlim){return 0}
syscalls[375]=function SYS_membarrier(){return 0}
function route_syscall(){n=arguments[0]
argv=[].slice.call(arguments,1)
f=syscalls[n]
name=f?f.name:n
debug('syscall('+name+(argv.length>0?', '+argv.join(', '):'')
+')')
if(!f){error('unimplemented syscall '+n+' called')
return-1}
return f.apply(this,argv)}
for(var i in[0,1,2,3,4,5,6]){functions['env']['__syscall'+i]=route_syscall}
functions['env']['__syscall_cp']=route_syscall
function run_wasm_code(){heap=new Uint8Array(instance.exports.memory.buffer);heap_size=instance.exports.memory.buffer.byteLength;if(dump_cross_offsets){instance.exports.setenv(heap_malloc_string('DUMP_CROSS_OFFSETS'),heap_malloc_string('1'),1)}
debug("running main()")
var ret=instance.exports.mono_wasm_main(heap_malloc_string(files[0]),debug_logs);debug('main() returned: '+ret);}
if(browser_environment){fetch('index.wasm').then(function(response){return response.arrayBuffer()}).then(function(buf){return WebAssembly.compile(buf)}).then(function(mod){return WebAssembly.instantiate(mod,functions)}).then(function(i){instance=i
var files_promises=[];files.forEach(function(url,i){files_promises.push(fetch(url).then(function(res){return res.arrayBuffer();}).then(function(buf){files_content[url]=new Uint8Array(buf)}));});Promise.all(files_promises).then(function(){run_wasm_code();document.dispatchEvent(new Event('WebAssemblyContentLoaded'));});})}
else{var module=new WebAssembly.Module(read('index.wasm','binary'))
instance=new WebAssembly.Instance(module,functions)
run_wasm_code()}